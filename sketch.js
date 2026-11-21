var largura = 400 , altura = 400;
var player,ammunition;

function setup() {
  createCanvas(largura, altura);
  describe("A 400 by 400 pixel gray canvas.");
  player = new Nave(largura-30,altura-50,"blue");
  ammunition = []
}

function draw() {
  background(220);
  player.show();
  gameControls();
  Interface.animeShot(ammunition);
  Interface.destroiShot(ammunition);
}

function keyPressed(){
  if(keyCode === 32) ammunition.push(new Bullet(player.getX()+10,player.getY()+10));
}

function gameControls(){
    if(keyIsDown(UP_ARROW) && player.getY() > 0) player.setY(player.getY() - 3);
    if(keyIsDown(DOWN_ARROW) && player.getY() < altura-20) player.setY(player.getY() + 3);
}