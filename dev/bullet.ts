/// <reference path="spaceship.ts" />

class bullet {
    public speed: number;
    public div: HTMLElement;
    public posX: number;
    public posY: number;

    constructor(parent: HTMLElement) {
        this.div = document.createElement("bullet");
        parent.appendChild(this.div);

        this.speed = 5;
        this.posX = Spaceship.prototype.posX;
    }
}