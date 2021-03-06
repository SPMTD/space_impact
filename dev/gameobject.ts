abstract class GameObject {

    protected _speed: number;
    protected _div: HTMLElement;
    protected _posX: number;
    protected _posY: number;
    protected _height: number;
    protected _width: number;
    protected _direction: string;
    protected container = document.getElementById("container");
    protected _hitpoints: number;

    constructor() {

    }

    /**
     * Removes selected div.
     * E.G When bullet hits enemy or if the bullet flies out of the container.
     */
    public removeMe(): void {
        this.div.remove();
    }

    public draw(): void {
    }

    public move(): void {
    }

    public get height(): number {
        return this._height
    }

    public set height(v: number) {
        this._height = v;
    }

    public get width(): number {
        return this._width
    }

    public set width(v: number) {
        this._width = v;
    }


    public get div(): HTMLElement {
        return this._div;
    }


    public set div(v: HTMLElement) {
        this._div = v;
    }

    public get x(): number {
        return this._posX;
    }

    public set x(v: number) {
        this._posX = v;
    }


    public get y(): number {
        return this._posY;
    }

    public set y(v: number) {
        this._posY = v;
    }


    public get speed(): number {
        return this._speed;
    }

    public set speed(v: number) {
        this._speed = v;
    }

    public get hitpoints(): number {
        return this._hitpoints;
    }

    public set hitpoints(v: number) {
        this._hitpoints = v;
    }
}