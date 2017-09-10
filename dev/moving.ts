/// <reference path="enemy.ts" />


class Moving implements Behaviour {
    private speed: number;

    public gameObject: GameObject;
    public spaceship: Spaceship;
    public enemy: Enemy;
    public object: GameObject;

    constructor(s: number, GameObject) {
        this.speed = s;
    }

    public onKeyDown(e: KeyboardEvent) {

    }

    public onKeyUp(e: KeyboardEvent) {

    }

    move(object: any, speed):void {
        object.y = object.y + speed;
    }

    public draw(gameObject) {
        gameObject.div.style.transform = "translate(" + gameObject.y + "px, " + gameObject.x + "px)";
    }
}