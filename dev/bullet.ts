/// <reference path="spaceship.ts" />

class Bullet extends GameObject{
    private spaceship: Spaceship;
    private behaviour: Behaviour;

    constructor(parent: HTMLElement, posX: number, posY: number) {
        super();
        this._speed = 10;
        this._posX = posX + this._width;
        this._posY = posY + (this._height / 2);

        this._div = document.createElement("bullet");
        parent.appendChild(this.div);

        this.behaviour = new Moving(this.speed, this);
    }

    public move(): void {
        this.behaviour.move(this, this.speed);
    }

    public draw(): void {
        this.behaviour.draw(this);
    }
}