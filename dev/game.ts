class Game {

    private spaceship : Spaceship;

    constructor() {
        let container = document.getElementById("container");
        this.spaceship = new Spaceship(container);


        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){
        this.spaceship.draw();

        requestAnimationFrame(() => this.gameLoop());
    }
} 


// load
window.addEventListener("load", function() {
    let g:Game = new Game();
});