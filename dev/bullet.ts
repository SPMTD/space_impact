/// <reference path="spaceship.ts" />

class Bullet extends GameObject{
    private spaceship: Spaceship;
    private behaviour: Behaviour;

    constructor(parent: HTMLElement, x: number, y: number) {
        super();
        this.speed = 10;
        this.x = x * 1.151;
        this.y = y * 1.35;

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