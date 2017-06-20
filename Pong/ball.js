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
            this.ballReset();
        }

        // Check if ball goes of screen to the left
        if (this.x - (this.radius / 2 ) <= 0 ){
            players[1].score += 1;
            this.ballReset();
        }

        //  Bounce of the top of the screen
        if (this.y - (this.radius / 2 ) <= 0){
            this.y = this.radius / 2;
            this.yVel *= -1;
        }

        //  Bounce of the bottom of the screen
        if (this.y + (this.radius / 2 ) >= canvas.height){
            this.y = canvas.height - this.radius / 2;
            this.yVel *= -1;
        }

        // Check if ball bounces of paddle
        if (this.xVel > 0){
            if (players[1].paddle.isColliding()){
                this.reverseBall(players[1]);
            }
        }else{
            if (players[0].paddle.isColliding()){
                this.reverseBall(players[0]);
            }
        }
    }

    this.reverseBall = function (player) {
        var hit_height = player.paddle.distanceFromCenter();
        this.yVel = hit_height * 0.35;
        this.xVel *= -1;
        // add a little speed bump to xvelocity
        if (this.xVel > 0){
            this.xVel += 0.05
        } else{
            this.xVel -= 0.05
        }
    }

    this.ballReset = function () {
        this.x = (canvas.width / 2 );
        this.y = (canvas.height / 2 );
        this.yVel = this.setYdirection();
    }

    this.drawBall = function(){
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
        ctx.fill();
    }
}