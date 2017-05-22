class Moving implements Behaviour {
    private speed: number;

    public spaceship: Spaceship;

    constructor(s: number, object) {
        this.speed = s;
    }

    public onKeyDown(e: KeyboardEvent) {

    }

    public onKeyUp(e: KeyboardEvent) {

    }

    move(object: any, speed):void {
        object.posY = object.posY + speed;
    }

    public draw(object) {
        object.div.style.transform = "translate(" + object.posX + "px, " + object.posY + "px)";
    }
}