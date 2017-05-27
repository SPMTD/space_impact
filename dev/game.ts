/// <reference path="spaceship.ts" />
/// <reference path="bullet.ts" />
/// <reference path="utils.ts" />
/// <reference path="enemy.ts" />



class Game {

    private spaceship: Spaceship;
    private bullets: Array<Bullet> = new Array<Bullet>();
    private enemy: Enemy;
    private enemies: Array<Enemy> = new Array<Enemy>();
    private gameObjects: Array<GameObject> = new Array<GameObject>();
    public static instance: Game;
    private container = document.getElementById("container");

    private randomY: number;
    private enemyCounter: number;

    constructor() {
        this.gameObjects.push(new Spaceship(this.container));
        setInterval(() => {
            this.gameObjects.push(new Enemy(this.container));

        }, 1000);


        requestAnimationFrame(() => this.gameLoop());

    }

    /**
     * Creates bullet when player presses space.
     * @param b 
     */
    public createBullet() {
        let spaceShips = this.gameObjects[0];
        this.gameObjects.push(new Bullet(this.container, spaceShips.x, spaceShips.y));
    }

    /**
     * GameLoop
     */
    private gameLoop() {

        for (let g of this.gameObjects) {
            g.move();
            g.draw();
        }

        requestAnimationFrame(() => this.gameLoop());
    }

    /**
     * Usage of singleton to create Game instance.
     */
    public static getInstance() {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    }
}


// load
window.addEventListener("load", function () {
    let g: Game = Game.getInstance();
});