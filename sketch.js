//CREATE VARIABLES
var bgImg, cat, catImg1, catImg2, catImg3;
var mouse, mouseImg1, mouseImg2, mouseImg3, mouseImg4;


function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catImg1 = loadImage("cat1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    catImg3 = loadImage("cat4.png");

    mouseImg1 = loadImage("mouse1.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
    mouseImg3 = loadImage("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     cat = createSprite(800,700);
     cat.addImage(catImg1);
     cat.scale =0.2;

     mouse = createSprite(200,700);
     mouse.addImage(mouseImg1);
     mouse.scale =0.2;

}

function draw() {

    background(bgImg);
    keyPressed();
    
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("running",catImg3);
        cat.changeAnimation("running");
        mouse.addAnimation("mouse",mouseImg3)
        mouse.changeAnimation("mouse")
        cat.x = 300;
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode==LEFT_ARROW){
    cat.addAnimation("running",catImg2);
    cat.changeAnimation("running");
    mouse.addAnimation("mouse",mouseImg2);
    mouse.changeAnimation("mouse");
    cat.velocityX = -5;

}

}
