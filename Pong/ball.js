function Ball(width, x, y, xVel, yVel) {
    this.width = width;
    this.x = x;
    this.y = y;
    this.xVel = xVel;
    this.yVel = yVel;

    this.moveBall = function(){
        this.x = this.x + this.xVel;
        this.y = this.y + this.yVel;

        if (this.x + (this.width / 2 ) >= canvas.width || this.x - (this.width / 2 ) <= 0){
            this.xVel = this.xVel * -1
        }
        if (this.y + (this.width / 2 ) >= canvas.height || this.y - (this.width / 2 )<= 0){
            this.yVel = this.yVel * -1
        }
    }

    this.drawBall = function(){
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.width, 0, Math.PI*2, true);
    ctx.fill();
    }
}