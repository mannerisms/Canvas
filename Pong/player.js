function Player(playerNum, name) {
    this.playerNum = playerNum;
    this.name = name;
    this.score = 0;
    this.paddle = new Paddle(this.playerNum);
}