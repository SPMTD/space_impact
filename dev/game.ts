/// <reference path="spaceship.ts" />
/// <reference path="bullet.ts" />


class Game {

    private spaceship : Spaceship;
    private bullet : Array<Bullet> = new Array<Bullet>();
    public static instance: Game;
    private container = document.getElementById("container");

    constructor() {
        this.spaceship = new Spaceship(this.container);
        // this.bullet = new Bullet(container);


        requestAnimationFrame(() => this.gameLoop());
    }

    public createBullet(b: Bullet) {
        this.bullet.push(b);
    }


    private gameLoop(){
        this.spaceship.draw();

        for (let b of this.bullet) {
            b.move();
            b.draw();
            if (b.y < 0 || b.y > 800 || b.x < 0 || b.x > 600) {
                b.removeMe();
            }
        }

        requestAnimationFrame(() => this.gameLoop());
    }

    public static getInstance() {
        if(!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    }
} 


// load
window.addEventListener("load", function() {
    let g:Game = Game.getInstance();
});