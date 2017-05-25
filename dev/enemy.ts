/// <reference path="gameobject.ts" />
/// <reference path="bullet.ts" />
/// <reference path="behaviour.ts" />
/// <reference path="moving.ts" />

class Enemy extends GameObject {
    
    private gameObject: GameObject;
    private behaviour: Behaviour
    public div: HTMLElement;
    private randomX: number;
    public x: number;
    public y: number;


    constructor(parent: HTMLElement) {
        super();
        this.div = document.createElement("enemy");
        parent.appendChild(this.div);

        this.randomX = Math.floor(Math.random() * 500) + 1;

        this.speed = -2;
        this.x = this.randomX;
        this.y = 775;


        this.height = 25;
        this.width = 40;
        this.hitpoints = 1;

        this.behaviour = new Moving(this.speed, this);
    }

    public move(): void {
        this.behaviour.move(this, this.speed);
    }

    public draw(): void {
        this.behaviour.draw(this);
    }

    public test(){
        
    }

}