class Enemies extends GameObject {
    
    private gameobject: GameObject; 
    public div: HTMLElement;
    public height: number;
    public width: number;   
    public hitpoints: number;

    public behaviour: Behaviour;

    constructor(parent: HTMLElement) {
        super();

        this.div = document.createElement("enemy");
        parent.appendChild(this.div);

        this.speed = 3;
        this.x = 400;
        this.y = 200;
        this.height = 50;
        this.width = 50;

        this.behaviour = new Moving(this.speed, this);
    }

    public gotHit(hit: boolean): void {
        if(hit) {
            this.hitpoints -= 1;
        }
    }

    public move(): void {
        this.behaviour.move(this, this.speed);
    }

    public draw(): void {
        this.behaviour.draw(this);
    }

}