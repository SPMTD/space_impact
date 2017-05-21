/// <reference path="spaceship.ts" />

class Bullet extends Spaceship{
    // private div: HTMLElement;
    // public speed: number;
    // private posX: number;
    // private posY: number;
    
    constructor(parent: HTMLElement) {
        super(parent);
        this.speed = 0;
        
        // this.posX = 300;
        // this.posY = 300;
1
    }

    public draw():void {
        // console.log(Spaceship.prototype.bulletShooting);

        this.posX += this.speed;
        this.div.style.transform = "translate("+ this.posX +"px,"+ this.posY +"px)";
        console.log(this.posX, this.posY);
    }
}