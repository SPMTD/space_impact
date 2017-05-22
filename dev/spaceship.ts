/// <reference path="gameobject.ts" />
/// <reference path="bullet.ts" />
/// <reference path="behaviour.ts" />
/// <reference path="moving.ts" />


class Spaceship extends GameObject{
    private gameobject: GameObject;
    public div: HTMLElement;
    public bulletShooting: boolean;
    private bullet: Bullet;
    public width: number;
    public height: number;

    public behaviour: Behaviour;

    constructor(parent: HTMLElement) {
        super();
        this.div = document.createElement("spaceship");
        parent.appendChild(this.div);

        this.speed = 5;
        this.x = 200;
        this.y = 200;
        this.height = 63;
        this.width = 83;

        this.behaviour = new Moving(this.speed, this);

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));
    }

    /**
     * Checks if the player pressed a key.
     * Sprite movement.
     * @param e 
     */
    private onKeyDown(e: KeyboardEvent):void {

        if(e.keyCode == 87) {
            this.x = this.x - this.speed;
        }
        else if(e.keyCode == 83) {
            this.x = this.x + this.speed;            
        }
        else if(e.keyCode == 65) {
            this.y = this.y - this.speed;
        }
        else if(e.keyCode == 68) {
            this.y = this.y + this.speed;
        }
        else if(e.keyCode == 32) {
            let b = new Bullet(this.container, this.x, this.y);
            Game.getInstance().createBullet(b);
        }

    }

    /**
     * Checks if player let go of keys.
     * @param e 
     */
    private onKeyUp(e: KeyboardEvent) :void {
        if(this.onKeyUp) {
        }
    }

    public draw():void {
        this.behaviour.draw(this);
    }
}