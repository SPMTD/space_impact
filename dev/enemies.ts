class Enemies extends GameObject {
    
    public behaviour: Behaviour

    constructor(parent: HTMLElement) {
        super();
        this.div = document.createElement("enemy");
        parent.appendChild(this.div);
        this.speed = 1;
        this.x = 300;
        this.y = 300;
        this.height = 100;
        this.width = 100;
        this.hitpoints = 1;
        this.behaviour = new Moving(this.speed, this);
    }

    public draw(): void {
        this.behaviour.draw(this);

    }

    public move(): void {
        this.behaviour.move(this, this.speed);
    }

}