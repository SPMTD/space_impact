/// <reference path="spaceship.ts" />
/// <reference path="bullet.ts" />


class Game {

    private spaceship : Spaceship;
    private bullet : Bullet;

    constructor() {
        let container = document.getElementById("container");
        this.spaceship = new Spaceship(container);
        // this.bullet = new Bullet(container);


        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){
        this.spaceship.draw();

        requestAnimationFrame(() => this.gameLoop());
    }
} 


// load
window.addEventListener("load", function() {
    let g:Game = new Game();
});