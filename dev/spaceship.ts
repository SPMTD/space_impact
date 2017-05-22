/// <reference path="gameobject.ts" />

/// <reference path="bullet.ts" />

class Spaceship extends GameObject{
    private gameobject: GameObject;
    public div: HTMLElement;
    public bulletShooting: boolean;
    private bullet: Bullet;

    constructor(parent: HTMLElement) {
        super();
        this.div = document.createElement("spaceship");
        parent.appendChild(this.div);

        this.speed = 0;
        this._posX = 200;
        this._posY = 200;

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));
    }

    private onKeyDown(e: KeyboardEvent):void {
        // console.log(e);
        // switch(e.keyCode) {
        //     case 1:
        //         e.keyCode = "87";
        //         break;
        // }

        if(e.keyCode == 87) {
            // console.log("w")
            this._direction = 'up'
        }
        else if(e.keyCode == 83) {
            // console.log("s");
            this._direction = 'down'
            // console.log(this.direction);
            
        }
        else if(e.keyCode == 65) {
            // console.log("a");
            this._direction = 'left';
        }
        else if(e.keyCode == 68) {
            // console.log("d");
            this._direction = 'right';
        }
        else if(e.keyCode == 32) {
            let b = new Bullet(this.container, this._posX, this._posY);
            Game.getInstance().createBullet(b);
        }
        else {
            this._direction = 'stopped';
        }

    }

    private onKeyUp(e: KeyboardEvent) :void {
        if(this.onKeyUp) {
            this._direction = 'stopped';
        }
    }

    public draw():void {
        // console.log(this.direction);

        if(this._direction == 'up'){
            this._speed = 3;
            this._posY -= this.speed;
        }
        else if(this._direction == 'down') {
            this._speed = 3;
            this._posY += this.speed;
        }
        else if(this._direction == 'left') {
            this.speed = 3;
            this._posX -= this.speed;
        }
        else if(this._direction == 'right') {
            this.speed = 3;
            this._posX += this.speed;
        }
        else if(this._direction == 'stopped'){
            this._speed = 0;
            this._posX += this.speed;
            this._posY += this.speed;
        }
        // console.log(this.direction);
        

        this.div.style.transform = "translate("+ this._posX +"px,"+ this._posY+"px)";
    }
}