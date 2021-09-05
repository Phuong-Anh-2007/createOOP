class Image {
    constructor(img,top,left,width,height, speed) {
        this.img = img;
        this.top = top;
        this.left = left;
        this.width= width;
        this.height= height;
        this.speed= speed;
    }

    showImage() {
        return '<img width="' + this.width + '"'
                    +' height="' + this.height + '"'
                    +' src="' + this.img + '"'
                    +' style = "top: ' + this.top + 'px; left: '+this.left+'px; position:absolute;">';
    }

    // moveRight() {
    //     this.left += this.speed;
    //     console.log(img_1.left+' '+window.innerWidth);
    //     console.log('Size: '+this.width);
    // }

    // moveLeft() {
    //     this.left -= this.speed;
    //     console.log(img_1.left+' '+window.innerWidth);
    //     console.log('Size: '+this.width);
    // }

    move() {
        let touchLeft = this.left > window.innerWidth;
        let touchRight = this.left + this.width < 0;

        if (touchLeft || touchRight) {
            this.speed = -this.speed;
        }
        this.left += this.speed;
    }
}
let img_1 = new Image('img/abf34f8db6e240bc19f3.jpg',100,0,300,250,50);

document.getElementById('show_1').innerHTML=img_1.showImage();


function start() {
    img_1.move();
    document.getElementById('show_1').innerHTML=img_1.showImage();
    
    setTimeout(start,250);


}










