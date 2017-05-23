class Enemies extends GameObject {
    
    public behaviour: Behaviour
    private randomY: number;

    constructor(parent: HTMLElement) {
        super();
        this.div = document.createElement("enemy");
        parent.appendChild(this.div);

        this.randomY = Math.floor(Math.random() * 500) + 1;

        this.speed = 2;
        this.x = 200;
        this.y = 200;


        this.height = 25;
        this.width = 40;
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