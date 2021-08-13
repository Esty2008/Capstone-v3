class Form{

    constructor(){

        this.button1 = createButton('Level 1')
     

        this.button2 = createButton('Level 2')
        

        this.button3 = createButton('Level 3')

        console.log('hi')
        
    }

    display(){
        var title = createElement('h1')
        title.html('WW3')
        title.position(displayWidth/2-300,displayHeight-900)


        this.button1.position(displayWidth/2-300,displayHeight-450);
        this.button1.style('background', 'yellow'); 

        this.button2.position(displayWidth/2-300,displayHeight-420);
        this.button2.style('background', 'orange'); 

        this.button3.position(displayWidth/2-300,displayHeight-390);
        this.button3.style('background', 'red'); 

        this.button1.mousePressed(() =>{
           level = 'level1'
    })
}
}