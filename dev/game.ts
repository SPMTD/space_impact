/// <reference path="spaceship.ts" />
/// <reference path="bullet.ts" />
/// <reference path="utils.ts" />
/// <reference path="enemies.ts" />



class Game {

    private spaceship : Spaceship;
    private bullet : Array<Bullet> = new Array<Bullet>();
    private enemie: Enemies;
    private enemies: Array<Enemies> = new Array<Enemies>();
    // private hitpoints = document.getElementById("hitpoints");
    public static instance: Game;
    private container = document.getElementById("container");

    private randomY: number;
    private enemyCounter: number;

    constructor() {
        this.spaceship = new Spaceship(this.container);

        this.createEnemie(this.enemie);

        requestAnimationFrame(() => this.gameLoop());
    }

    /**
     * Creates bullet when player presses space.
     * @param b 
     */
    public createBullet(b: Bullet) {
        this.bullet.push(b);
    }

    public createEnemie(e: Enemies) {
        setInterval(() => {
            let e = new Enemies(this.container);
            this.enemies.push(e);
            
        }, 2500);
    }

    /**
     * GameLoop
     */
    private gameLoop(){
        this.spaceship.draw();

        for (let b of this.bullet) {
            b.move();
            b.draw();
            if (b.y < 0 || b.y > 800 || b.x < 0 || b.x > 600) {
                b.removeMe();
            }
        }

        for (let e of this.enemies) {
            e.move();
            e.draw();
            if(e.x < 0 || e.y < 0 ) {
                e.removeMe();
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