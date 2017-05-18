class Spaceship {
    
    public speed: number;
    public div: HTMLElement;
    public posX: number;
    public posY: number;
    public direction: string;

    constructor(parent: HTMLElement) {
        this.div = document.createElement("spaceship");
        parent.appendChild(this.div);

        this.speed = 0;
        this.posX = 200;
        this.posY = 200;

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));
    }

    private onKeyDown(e: KeyboardEvent):void {
        console.log(e);

        if(e.keyCode == 87) {
            console.log("w")
            this.direction = 'up'
        }
        else if(e.keyCode == 83) {
            console.log("s");
            this.direction = 'down'
            // console.log(this.direction);
            
        }
        else if(e.keyCode == 65) {
            console.log("a");
            this.direction = 'left';
        }
        else if(e.keyCode == 68) {
            console.log("d");
            this.direction = 'right';
        }
        else if(e.keyCode == 32) {
            console.log("shooting");
        }
        else {
            this.direction = 'stopped';
        }

    }

    private onKeyUp(e: KeyboardEvent) :void {
        if(this.onKeyUp) {
            this.direction = 'stopped';
        }
    }

    private shooting():void {
        
    }

    public draw():void {
        // console.log(this.direction);

        if(this.direction == 'up'){
            this.speed = 3;
            this.posY -= this.speed;
        }
        else if(this.direction == 'down') {
            this.speed = 3;
            this.posY += this.speed;
        }
        else if(this.direction == 'left') {
            this.speed = 3;
            this.posX -= this.speed;
        }
        else if(this.direction == 'right') {
            this.speed = 3;
            this.posX += this.speed;
        }
        else if(this.direction == 'stopped'){
            this.speed = 0;
            this.posX += this.speed;
            this.posY += this.speed;
        }
        // console.log(this.direction);

        this.div.style.transform = "translate("+ this.posX +"px,"+ this.posY+"px)";
    }
}