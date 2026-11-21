class Interface{
    static animeShot(ammunition){
        ammunition.forEach(shot => {
            shot.show();
            shot.automove(4);
        });
    }
    static destroiShot(ammunition){
        ammunition.forEach(shot => {
            if(shot.getX() < -5) ammunition.splice(0,1);
        });
    }
}