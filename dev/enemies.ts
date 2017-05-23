class Enemies extends GameObject {
    
    public div: HTMLElement;
    public height: number;
    public width: number;   
    public hitpoints: number;

    public behaviour: Behaviour;

    constructor() {
        super();

        this.speed = 3;

        this.behaviour = new Moving(this.speed, this);
    }

    public gotHit(hit: boolean): void {
        if(hit) {
            this.hitpoints -= 1;
        }
    }

}