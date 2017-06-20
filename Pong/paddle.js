function Paddle(playerNum) {
    this.playerNum = playerNum;
    this.height = 100;
    this.width = 20;
    if (this.playerNum == 1){
        this.x = 0 + 5;
    }else{
        this.x = canvas.width - this.width - 5 ;
    }
    this.y = (canvas.height / 2) - (this.height / 2);

    this.move = function(pos){
        this.pos = pos;
        // set max height
        if (this.pos > canvas.height - this.height){ this.y = canvas.height - this.height}
        else if (this.pos < 0){ this.y = 0}
        else{this.y = this.pos};
    }

    this.isColliding = function () {
        var distX = Math.abs(ball.x - this.x - this.width / 2);
        distY = Math.abs(ball.y - this.y - this.height / 2);

        if (distX > ((this.width / 2 ) + ball.radius)) { return false; }
        if (distY > ((this.height / 2) + ball.radius)) { return false; }

        if (distX <= (this.width / 2)) { return true; }
        if (distY <= (this.height / 2)) { return true; }

        var dx=distX-this.width / 2;
        var dy=distY-this.height / 2;
        return (dx*dx+dy*dy<=(ball.radius * ball.radius));
    }

    this.distanceFromCenter = function () {
        return ball.y - this.y - this.height / 2;
    }

    this.draw = function(){
        ctx.fillStyle = 'white';
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        roundRect(ctx, this.x, this.y, this.width, this.height, 8, true);
    }
}

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == "undefined" ) {
    stroke = true;
  }
  if (typeof radius === "undefined") {
    radius = 5;
  }
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (stroke) {
    ctx.stroke();
  }
  if (fill) {
    ctx.fill();
  }
}