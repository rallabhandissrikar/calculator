function calKey(keyVal, xpos, ypos) {
    this.x = xpos;
    this.y = ypos;
    this.width = 80;
    this.height = 80;
    this.keyVal = keyVal;
    var sh;

    this.show = function() {
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
        textSize(45);
        text(this.keyVal, this.x, this.y);
    }
}