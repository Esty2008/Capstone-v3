class Alien {
    constructor(x,y,w,l){
        this.width = w
        this.length = l
        this.x = x
        this.y = y
        //this.image = loadImage()
    }
    display(){
        //image(alienImg , 50,50);
        createSprite( this.x,this.y,this.width,this.length)
    }
}