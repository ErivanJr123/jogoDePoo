class Bullet{
    #xBullet;
    #yBullet;
    constructor(x,y){
        this.#xBullet = x;
        this.#yBullet = y;
    }
    show(){
        fill("orange");
        circle(this.#xBullet,this.#yBullet,5);
    }
    automove(speed){
        this.#xBullet -= speed;
    }
    getX(){
        return this.#xBullet;
    }
}