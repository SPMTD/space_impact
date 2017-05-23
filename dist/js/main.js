var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameObject = (function () {
    function GameObject() {
        this.container = document.getElementById("container");
    }
    GameObject.prototype.removeMe = function () {
        this.div.remove();
    };
    Object.defineProperty(GameObject.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (v) {
            this._height = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (v) {
            this._width = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "div", {
        get: function () {
            return this._div;
        },
        set: function (v) {
            this._div = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "x", {
        get: function () {
            return this._posX;
        },
        set: function (v) {
            this._posX = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "y", {
        get: function () {
            return this._posY;
        },
        set: function (v) {
            this._posY = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (v) {
            this._speed = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "hitpoints", {
        get: function () {
            return this._hitpoints;
        },
        set: function (v) {
            this._hitpoints = v;
        },
        enumerable: true,
        configurable: true
    });
    return GameObject;
}());
var Moving = (function () {
    function Moving(s, object) {
        this.speed = s;
    }
    Moving.prototype.onKeyDown = function (e) {
    };
    Moving.prototype.onKeyUp = function (e) {
    };
    Moving.prototype.move = function (object, speed) {
        object.y = object.y + speed;
    };
    Moving.prototype.draw = function (object) {
        object.div.style.transform = "translate(" + object.y + "px, " + object.x + "px)";
    };
    return Moving;
}());
var Spaceship = (function (_super) {
    __extends(Spaceship, _super);
    function Spaceship(parent) {
        var _this = _super.call(this) || this;
        _this.div = document.createElement("spaceship");
        parent.appendChild(_this.div);
        _this.hitpointsdiv = document.createElement("hitpoints");
        parent.appendChild(_this.hitpointsdiv);
        _this.speed = 5;
        _this.hitpoints = 10;
        _this.x = 200;
        _this.y = 200;
        _this.height = 63;
        _this.width = 83;
        _this.behaviour = new Moving(_this.speed, _this);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        return _this;
    }
    Spaceship.prototype.onKeyDown = function (e) {
        if (e.keyCode == 87) {
            this.x = this.x - this.speed;
        }
        else if (e.keyCode == 83) {
            this.x = this.x + this.speed;
        }
        else if (e.keyCode == 65) {
            this.y = this.y - this.speed;
        }
        else if (e.keyCode == 68) {
            this.y = this.y + this.speed;
        }
        else if (e.keyCode == 32) {
            var b = new Bullet(this.container, this.x, this.y);
            Game.getInstance().createBullet(b);
        }
    };
    Spaceship.prototype.onKeyUp = function (e) {
        if (this.onKeyUp) {
        }
    };
    Spaceship.prototype.draw = function () {
        this.behaviour.draw(this);
    };
    return Spaceship;
}(GameObject));
var Bullet = (function (_super) {
    __extends(Bullet, _super);
    function Bullet(parent, x, y) {
        var _this = _super.call(this) || this;
        _this.speed = 10;
        _this.x = x * 1.151;
        _this.y = y * 1.35;
        _this._div = document.createElement("bullet");
        parent.appendChild(_this.div);
        _this.behaviour = new Moving(_this.speed, _this);
        return _this;
    }
    Bullet.prototype.move = function () {
        this.behaviour.move(this, this.speed);
    };
    Bullet.prototype.draw = function () {
        this.behaviour.draw(this);
    };
    return Bullet;
}(GameObject));
var Enemies = (function (_super) {
    __extends(Enemies, _super);
    function Enemies() {
        var _this = _super.call(this) || this;
        _this.speed = 3;
        _this.behaviour = new Moving(_this.speed, _this);
        return _this;
    }
    Enemies.prototype.gotHit = function (hit) {
        if (hit) {
            this.hitpoints -= 1;
        }
    };
    return Enemies;
}(GameObject));
var Utils = (function () {
    function Utils() {
    }
    Utils.checkCollision = function (object1, object2) {
        console.log(object1.x, object1.width, object2.x, object2.height);
        return (object1.x < object2.x + object2.width &&
            object1.x + object1.width > object2.x &&
            object1.y < object2.y + object2.height &&
            object1.height + object1.y > object2.y);
    };
    Utils.removeFromArray = function (object, arrayObject) {
        for (var i = 0; i < arrayObject.length; i++) {
            if (arrayObject[i] === object) {
                arrayObject.splice(i, 1);
            }
        }
    };
    Utils.removeObject = function (o, arrayObject) {
        Utils.removeFromArray(o, arrayObject);
    };
    return Utils;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.bullet = new Array();
        this.container = document.getElementById("container");
        this.spaceship = new Spaceship(this.container);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.createBullet = function (b) {
        this.bullet.push(b);
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.spaceship.draw();
        document.getElementById("hitpoints").innerHTML = Spaceship.prototype.hitpoints + " HP";
        for (var _i = 0, _a = this.bullet; _i < _a.length; _i++) {
            var b = _a[_i];
            b.move();
            b.draw();
            if (b.y < 0 || b.y > 800 || b.x < 0 || b.x > 600) {
                b.removeMe();
            }
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.getInstance = function () {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = Game.getInstance();
});
//# sourceMappingURL=main.js.map