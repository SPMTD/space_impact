class Spaceship {
    
    public speed: number;
    public div: HTMLElement;
    public posX: number;
    public posY: number;
    public direction: string;

    constructor(parent: HTMLElement) {
        this.div = document.createElement("spaceship");
        parent.appendChild(this.div);

        this.speed = 2;
        this.posX = 200;
        this.posY = 200;

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
    }

    private onKeyDown(e: KeyboardEvent):void {
        // console.log(e);

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

    }

    public draw():void {
        if(this.direction = 'up'){
            this.posY += this.speed;
        }
        else if(this.direction = 'down') {
            this.posY -= this.speed;
        }
        else if(this.direction = 'left') {
            this.posX -= this.speed;
        }
        else if(this.direction = 'right') {
            this.posX += this.speed;
        }


        this.div.style.transform = "translate("+ this.posX +"px,"+ this.posY+"px)";
    }
}