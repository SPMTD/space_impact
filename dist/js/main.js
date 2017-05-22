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
var Spaceship = (function (_super) {
    __extends(Spaceship, _super);
    function Spaceship(parent) {
        var _this = _super.call(this) || this;
        _this.div = document.createElement("spaceship");
        parent.appendChild(_this.div);
        _this.speed = 0;
        _this._posX = 200;
        _this._posY = 200;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        return _this;
    }
    Spaceship.prototype.onKeyDown = function (e) {
        if (e.keyCode == 87) {
            this._direction = 'up';
        }
        else if (e.keyCode == 83) {
            this._direction = 'down';
        }
        else if (e.keyCode == 65) {
            this._direction = 'left';
        }
        else if (e.keyCode == 68) {
            this._direction = 'right';
        }
        else if (e.keyCode == 32) {
            var b = new Bullet(this.container, this._posX, this._posY);
            Game.getInstance().createBullet(b);
        }
        else {
            this._direction = 'stopped';
        }
    };
    Spaceship.prototype.onKeyUp = function (e) {
        if (this.onKeyUp) {
            this._direction = 'stopped';
        }
    };
    Spaceship.prototype.draw = function () {
        if (this._direction == 'up') {
            this._speed = 3;
            this._posY -= this.speed;
        }
        else if (this._direction == 'down') {
            this._speed = 3;
            this._posY += this.speed;
        }
        else if (this._direction == 'left') {
            this.speed = 3;
            this._posX -= this.speed;
        }
        else if (this._direction == 'right') {
            this.speed = 3;
            this._posX += this.speed;
        }
        else if (this._direction == 'stopped') {
            this._speed = 0;
            this._posX += this.speed;
            this._posY += this.speed;
        }
        this.div.style.transform = "translate(" + this._posX + "px," + this._posY + "px)";
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
        return _this;
    }
    return Bullet;
}(GameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        this.bullet = new Array();
        var container = document.getElementById("container");
        this.spaceship = new Spaceship(container);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.createBullet = function (b) {
        this.bullet.push(b);
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.spaceship.draw();
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