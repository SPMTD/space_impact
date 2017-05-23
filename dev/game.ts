/// <reference path="spaceship.ts" />
/// <reference path="bullet.ts" />
/// <reference path="utils.ts" />
/// <reference path="enemies.ts" />



class Game {

    private spaceship : Spaceship;
    private bullet : Array<Bullet> = new Array<Bullet>();
    private enemy : Enemies;
    // private hitpoints = document.getElementById("hitpoints");
    public static instance: Game;
    private container = document.getElementById("container");

    constructor() {
        this.spaceship = new Spaceship(this.container);
        this.enemy = new Enemies(this.container);

        requestAnimationFrame(() => this.gameLoop());
    }

    /**
     * Creates bullet when player presses space.
     * @param b 
     */
    public createBullet(b: Bullet) {
        this.bullet.push(b);
    }


    /**
     * GameLoop
     */
    private gameLoop(){
        this.spaceship.draw();
        this.enemy.draw();

        for (let b of this.bullet) {
            b.move();
            b.draw();
            if (b.y < 0 || b.y > 800 || b.x < 0 || b.x > 600) {
                b.removeMe();
            }
        }

        requestAnimationFrame(() => this.gameLoop());
    }

    /**
     * Usage of singleton to create Game instance.
     */
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