function Player(playerNum, name) {
    this.playerNum = playerNum;
    this.name = name;
    this.score = 0;
    this.paddle = new Paddle(this.playerNum);

    // Draw the player scores
    this.drawScore = function(){
        ctx.fillStyle = "grey";
        ctx.font = "bold 32px Arial";
        var score_x;
        if (this.playerNum == 1) {
            score_x = (canvas.width / 4)
        }else{
            score_x = ((canvas.width / 4) * 3)
        }
        ctx.fillText(this.score, score_x, 50);
    }
}