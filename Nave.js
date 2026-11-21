class Nave{
    #xNave;
    #yNave;
    #cor;
    constructor(x,y,cor){
        this.#xNave = x;
        this.#yNave = y;
        this.#cor = cor;
    }
    show(){
        fill(this.#cor);
        square(this.#xNave, this.#yNave,20);
    }
    getX(){
        return this.#xNave;
    }
    setX(x){
        this.#xNave = x;
    }
    getY(){
        return this.#yNave;
    }
    setY(y){
        this.#yNave = y;
    }
}