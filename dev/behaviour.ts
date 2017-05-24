interface Behaviour {
    gameObject: GameObject;
    draw(object): void;
    move(object, speed): void;
    onKeyDown(e: KeyboardEvent): void;
    onKeyUp(e: KeyboardEvent): void;
}