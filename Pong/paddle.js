function Paddle(playerNum) {
    this.playerNum = playerNum;
    this.height = 100;
    this.width = 20;
    if (this.playerNum == 1){
        this.x = 0;
    }else{
        this.x = canvas.width - this.width;
    }
    this.y = (canvas.height / 2) - (this.height / 2);

    this.move = function(){
        //
    }

    this.draw = function(){
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}