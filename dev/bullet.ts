/// <reference path="spaceship.ts" />

class Bullet{
    private div: HTMLElement;
    public speed: number;
    private posX: number;
    private posY: number;
    
    constructor(parent: HTMLElement) {
         this.div = document.createElement("bullet");
        parent.appendChild(this.div);

        this.speed = 0;
        this.posX = 300;
        this.posY = 300;
    }

    public draw(posX, posY):void {
        // console.log(Spaceship.prototype.bulletShooting);
        this.posX += this.speed;
        this.div.style.transform = "translate(" + this.posX +"px,"+ this.posY+"px)";
    }
}