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
            this.speed -= this.posY;
        }
        else if(e.keyCode == 65) {
            console.log("a");
            this.speed -= this.posX;
        }
        else if(e.keyCode == 68) {
            console.log("d");
            this.speed += this.posX;
        }

    }

    public draw():void {
        if(this.direction = 'up'){
            this.speed += this.posY;
        }


        this.div.style.transform = "translate("+ this.posX +"px,"+ this.posY+"px)";
    }
}