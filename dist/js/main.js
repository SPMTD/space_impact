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
var Spaceship = (function () {
    function Spaceship(parent) {
        var _this = this;
        this.div = document.createElement("spaceship");
        parent.appendChild(this.div);
        this.speed = 0;
        this.posX = 200;
        this.posY = 200;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Spaceship.prototype.onKeyDown = function (e) {
        if (e.keyCode == 87) {
            this.direction = 'up';
        }
        if (e.keyCode == 83) {
            this.direction = 'down';
        }
        if (e.keyCode == 65) {
            this.direction = 'left';
        }
        if (e.keyCode == 68) {
            this.direction = 'right';
        }
        if (e.keyCode == 32) {
            console.log("shooting");
            this.shooting();
        }
        else {
            this.direction = 'stopped';
        }
    };
    Spaceship.prototype.onKeyUp = function (e) {
        if (this.onKeyUp) {
            this.direction = 'stopped';
        }
    };
    Spaceship.prototype.shooting = function () {
        var container = document.getElementById("container");
        this.div = document.createElement("bullet");
        this.bullet = new Bullet(container);
        this.bullet.draw();
    };
    Spaceship.prototype.draw = function () {
        if (this.direction == 'up') {
            this.speed = 3;
            this.posY -= this.speed;
        }
        else if (this.direction == 'down') {
            this.speed = 3;
            this.posY += this.speed;
        }
        else if (this.direction == 'left') {
            this.speed = 3;
            this.posX -= this.speed;
        }
        else if (this.direction == 'right') {
            this.speed = 3;
            this.posX += this.speed;
        }
        else if (this.direction == 'stopped') {
            this.speed = 0;
            this.posX += this.speed;
            this.posY += this.speed;
        }
        this.div.style.transform = "translate(" + this.posX + "px," + this.posY + "px)";
    };
    return Spaceship;
}());
var Bullet = (function (_super) {
    __extends(Bullet, _super);
    function Bullet(parent) {
        var _this = _super.call(this, parent) || this;
        _this.speed = 0;
        1;
        return _this;
    }
    Bullet.prototype.draw = function () {
        this.posX += this.speed;
        this.div.style.transform = "translate(" + this.posX + "px," + this.posY + "px)";
        console.log(this.posX, this.posY);
    };
    return Bullet;
}(Spaceship));
var Game = (function () {
    function Game() {
        var _this = this;
        var container = document.getElementById("container");
        this.spaceship = new Spaceship(container);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.spaceship.draw();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = new Game();
});
//# sourceMappingURL=main.js.map