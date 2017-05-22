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
        object.x = object.x + speed;
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
        _this.speed = 5;
        _this.x = 200;
        _this.y = 200;
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
            var b = new Bullet(this.container, this._posX, this._posY);
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
    function Bullet(parent, posX, posY) {
        var _this = _super.call(this) || this;
        _this._speed = 10;
        _this._posX = posX + _this._width;
        _this._posY = posY + (_this._height / 2);
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
        for (var _i = 0, _a = this.bullet; _i < _a.length; _i++) {
            var b = _a[_i];
            b.move();
            b.draw();
            if (b.y < 0) {
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