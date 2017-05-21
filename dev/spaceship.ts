/// <reference path="bullet.ts" />

class Spaceship {
    
    public speed: number;
    public div: HTMLElement;
    public posX: number;
    public posY: number;
    private direction: string;
    public bulletShooting: boolean;
    private bullet: Bullet;

    constructor(parent: HTMLElement) {
        this.div = document.createElement("spaceship");
        parent.appendChild(this.div);

        this.speed = 0;
        this.posX = 200;
        this.posY = 200;

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));
    }

    private onKeyDown(e: KeyboardEvent):void {
        // console.log(e);
        // switch(e.keyCode) {
        //     case 1:
        //         keyCode = "87";
        //         break;
        // }

        if(e.keyCode == 87) {
            // console.log("w")
            this.direction = 'up'
        }
        if(e.keyCode == 83) {
            // console.log("s");
            this.direction = 'down'
            // console.log(this.direction);
            
        }
        if(e.keyCode == 65) {
            // console.log("a");
            this.direction = 'left';
        }
        if(e.keyCode == 68) {
            // console.log("d");
            this.direction = 'right';
        }
        if(e.keyCode == 32) {
            console.log("shooting");
            this.shooting();
        }
        else {
            this.direction = 'stopped';
        }

    }

    private onKeyUp(e: KeyboardEvent) :void {
        if(this.onKeyUp) {
            this.direction = 'stopped';
        }
    }

    private shooting():void {
       let container = document.getElementById("container");
       this.div = document.createElement("bullet");
       this.bullet = new Bullet(container);
       this.bullet.draw();
    }

    public draw():void {
        // console.log(this.direction);

        if(this.direction == 'up'){
            this.speed = 3;
            this.posY -= this.speed;
        }
        else if(this.direction == 'down') {
            this.speed = 3;
            this.posY += this.speed;
        }
        else if(this.direction == 'left') {
            this.speed = 3;
            this.posX -= this.speed;
        }
        else if(this.direction == 'right') {
            this.speed = 3;
            this.posX += this.speed;
        }
        else if(this.direction == 'stopped'){
            this.speed = 0;
            this.posX += this.speed;
            this.posY += this.speed;
        }
        // console.log(this.direction);
        

        this.div.style.transform = "translate("+ this.posX +"px,"+ this.posY+"px)";
    }
}