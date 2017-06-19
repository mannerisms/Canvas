function Ball(radius, x, y, xVel) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.xVel = xVel;
    this.setYdirection = function () {
        randomY = Math.floor(Math.random() * (10 - 3)) + 3;
        if (Math.random() >= 0.5){
            return randomY * -1
        }
        return randomY;
    }
    this.yVel = this.setYdirection();

    this.moveBall = function(){
        this.x = this.x + this.xVel;
        this.y = this.y + this.yVel;

        //  check if ball goes off screen to the right
        if (this.x + (this.radius / 2 ) >= canvas.width){
            players[0].score += 1;
            this.x = (canvas.width / 2 );
            this.y = (canvas.height / 2 );
            this.yVel = this.setYdirection();
        }

        // Check if ball goes of screen to the left
        if (this.x - (this.radius / 2 ) <= 0 ){
            players[1].score += 1;
            this.x = (canvas.width / 2 );
            this.y = (canvas.height / 2 );
            this.yVel = this.setYdirection();
        }

        //  Bounce of the top and bottom of the screen
        if (this.y + (this.radius / 2 ) >= canvas.height || this.y - (this.radius / 2 ) <= 0){
            this.yVel *= -1;
        }

        // Check if ball bounces of paddle
        if (this.xVel > 0){
            if (players[1].paddle.isColliding()){
                this.xVel *= -1;
            }
        }else{
            if (players[0].paddle.isColliding()){
                this.xVel *= -1;
            }
        }
    }

    this.drawBall = function(){
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
        ctx.fill();
    }
}