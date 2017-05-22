/// <reference path="spaceship.ts" />

class Bullet extends GameObject{
    private spaceship: Spaceship;
    private div: HTMLElement;
    

    constructor(parent: HTMLElement, posX: number, posY: number) {
        super();

        this.speed = 10;
        this.posX = posX;
        this.posY = posY;

        this.div = document.createElement("bullet");
        parent.appendChild(this.div);
    }
}