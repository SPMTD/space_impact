/// <reference path="gameobject.ts" />
/// <reference path="bullet.ts" />
/// <reference path="behaviour.ts" />
/// <reference path="moving.ts" />


class Spaceship extends GameObject{
    private gameobject: GameObject;
    public div: HTMLElement;
    public bulletShooting: boolean;
    private bullet: Bullet;

    public behaviour: Behaviour;

    constructor(parent: HTMLElement) {
        super();
        this.div = document.createElement("spaceship");
        parent.appendChild(this.div);

        this.speed = 5;
        this.x = 200;
        this.y = 200;

        this.behaviour = new Moving(this.speed, this);

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));
    }

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
            let b = new Bullet(this.container, this._posX, this._posY);
            Game.getInstance().createBullet(b);
        }

    }

    private onKeyUp(e: KeyboardEvent) :void {
        if(this.onKeyUp) {
        }
    }

    public draw():void {
        this.behaviour.draw(this);
    }
}