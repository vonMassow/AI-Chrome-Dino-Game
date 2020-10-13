class Dino {
    constructor(x, y, width, height, acc){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.acc = acc;
        this.vel = 0;
    }

    update() {
        if(this.y + this.height < CANVAS_HEIGHT) {
            this.vel += this.acc;
            this.y += this.vel;
            if(this.y  + this.height > CANVAS_HEIGHT) {
                this.y = CANVAS_HEIGHT - this.height;
                this.vel = 0;
            }
        }
    }

    draw() {
        rect(this.x, this.y, this.width, this.height);
    }
}