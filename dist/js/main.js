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
var Spaceship = (function () {
    function Spaceship(parent) {
        var _this = this;
        this.div = document.createElement("spaceship");
        parent.appendChild(this.div);
        this.speed = 2;
        this.posX = 200;
        this.posY = 200;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
    }
    Spaceship.prototype.onKeyDown = function (e) {
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
    };
    Spaceship.prototype.draw = function () {
        if (this.direction = 'up') {
            this.posY += this.speed;
        }
        else if (this.direction = 'down') {
            this.posY -= this.speed;
        }
        else if (this.direction = 'left') {
            this.posX -= this.speed;
        }
        else if (this.direction = 'right') {
            this.posX += this.speed;
        }
        this.div.style.transform = "translate(" + this.posX + "px," + this.posY + "px)";
    };
    return Spaceship;
}());
//# sourceMappingURL=main.js.map