var Game = (function () {
    function Game() {
        var _this = this;
        var container = document.getElementById("container");
        this.spaceship = new Spaceship(container);
        this.bullet = new Bullet(container);
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
        console.log(e);
        if (e.keyCode == 87) {
            console.log("w");
            this.direction = 'up';
        }
        else if (e.keyCode == 83) {
            console.log("s");
            this.direction = 'down';
        }
        else if (e.keyCode == 65) {
            console.log("a");
            this.direction = 'left';
        }
        else if (e.keyCode == 68) {
            console.log("d");
            this.direction = 'right';
        }
        else if (e.keyCode == 32) {
            console.log("shooting");
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
//# sourceMappingURL=main.js.map