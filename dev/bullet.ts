/// <reference path="spaceship.ts" />

class Bullet extends Spaceship{
    private spaceship: Spaceship;
    private bulletDiv: HTMLElement;
    

    constructor() {
        super(Spaceship.prototype.div);

        this.div = document.getElementById("spaceship");

        this.bulletDiv = document.createElement("bullet");
        this.div.appendChild(this.bulletDiv);
    }
}