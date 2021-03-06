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
    GameObject.prototype.draw = function () {
    };
    GameObject.prototype.move = function () {
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
var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy(parent) {
        var _this = _super.call(this) || this;
        _this.div = document.createElement("enemy");
        parent.appendChild(_this.div);
        _this.randomX = Math.floor(Math.random() * 500) + 1;
        _this.speed = -2;
        _this.x = _this.randomX;
        _this.y = 775;
        _this.height = 25;
        _this.width = 40;
        _this.hitpoints = 1;
        _this.behaviour = new Moving(_this.speed, _this);
        return _this;
    }
    Enemy.prototype.move = function () {
        this.behaviour.move(this, this.speed);
    };
    Enemy.prototype.draw = function () {
        this.behaviour.draw(this);
    };
    Enemy.prototype.test = function () {
    };
    return Enemy;
}(GameObject));
var Moving = (function () {
    function Moving(s, GameObject) {
        this.speed = s;
    }
    Moving.prototype.onKeyDown = function (e) {
    };
    Moving.prototype.onKeyUp = function (e) {
    };
    Moving.prototype.move = function (object, speed) {
        object.y = object.y + speed;
    };
    Moving.prototype.draw = function (gameObject) {
        gameObject.div.style.transform = "translate(" + gameObject.y + "px, " + gameObject.x + "px)";
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
        _this.speed = 10;
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
            Game.getInstance().createBullet();
        }
    };
    Spaceship.prototype.test = function () {
        console.log("test");
    };
    Spaceship.prototype.onKeyUp = function (e) {
        if (this.onKeyUp) {
        }
    };
    Spaceship.prototype.draw = function () {
        this.behaviour.draw(this);
        this.hitpointsdiv.innerHTML = this.hitpoints + " HP";
    };
    return Spaceship;
}(GameObject));
var Bullet = (function (_super) {
    __extends(Bullet, _super);
    function Bullet(parent, x, y) {
        var _this = _super.call(this) || this;
        _this.speed = 10;
        _this.x = x + 30;
        _this.y = y + 60;
        _this.height = 30;
        _this.width = 30;
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
var Utils = (function () {
    function Utils() {
    }
    Utils.checkCollision = function (object1, object2) {
        return (object1.x < object2.x + object2.width &&
            object1.x + object1.width > object2.x &&
            object1.y < object2.y + object2.height &&
            object1.height + object1.y > object2.y);
    };
    return Utils;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.bullets = new Array();
        this.enemies = new Array();
        this.gameObjects = new Array();
        this.container = document.getElementById("container");
        this.gameObjects.push(new Spaceship(this.container));
        setInterval(function () {
            _this.gameObjects.push(new Enemy(_this.container));
        }, 1000);
        var enemy = this.gameObjects[2];
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.createBullet = function () {
        var spaceShips = this.gameObjects[0];
        this.gameObjects.push(new Bullet(this.container, spaceShips.x, spaceShips.y));
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.gameObjects; _i < _a.length; _i++) {
            var g = _a[_i];
            g.move();
            g.draw();
            if (g.y < 0 || g.y > 900) {
                g.removeMe();
            }
            if (Utils.checkCollision(this.gameObjects[0], this.gameObjects[2])) {
                console.log("HITTIHIEHFLSDH");
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