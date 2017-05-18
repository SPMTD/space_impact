/// <reference path="spaceship.ts" />

class Bullet {
    private speed: number;
    private div: HTMLElement;
    private posX: number;
    private posY: number;

    constructor(parent: HTMLElement) {
        this.div = document.createElement("bullet");
        parent.appendChild(this.div);

        this.speed = 5;
        this.posX = 300;
        this.posY = 300;
    }

    public draw():void {
        console.log(Spaceship.prototype.bulletShooting);

        this.div.style.transform = "translate("+ this.posX +"px, "+ this.posY +"px)";
    }
}