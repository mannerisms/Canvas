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

    this.move = function(pos){
        this.pos = pos - this.height / 2;
        // set max height
        if (this.pos > canvas.height - this.height){ this.y = canvas.height - this.height}
        else if (this.pos < 0){ this.y = 0}
        else{this.y = this.pos};
        console.log(this.y)
    }

    this.draw = function(){
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}