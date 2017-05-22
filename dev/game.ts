/// <reference path="spaceship.ts" />
/// <reference path="bullet.ts" />


class Game {

    private spaceship : Spaceship;
    private bullet : Array<Bullet> = new Array<Bullet>();
    public static instance: Game;

    constructor() {
        let container = document.getElementById("container");
        this.spaceship = new Spaceship(container);
        // this.bullet = new Bullet(container);


        requestAnimationFrame(() => this.gameLoop());
    }

    public createBullet(b: Bullet) {
        this.bullet.push(b);
        console.log("created bullet");
    }


    private gameLoop(){
        this.spaceship.draw();

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