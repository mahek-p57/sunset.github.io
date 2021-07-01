const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg,hour,datetime ;

function preload() {
    // create getBackgroundImg( ) here

    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    backgroundImg = loadImage("sunrise1.png");
    backgroundImg = loadImage("sunrise2.png");
    backgroundImg = loadImage("sunrise3.png");
    backgroundImg = loadImage("sunrise4.png");
    backgroundImg = loadImage("sunrise5.png");
    backgroundImg = loadImage("sunrise6.png");
    backgroundImg = loadImage("sunset7.png");
    backgroundImg = loadImage("sunset8.png");
    backgroundImg = loadImage("sunset9.png");
    backgroundImg = loadImage("sunset10.png");
    backgroundImg = loadImage("sunset11.png");
    backgroundImg = loadImage("sunset12.png");

}

function draw(){

    // add condition to check if any background image is there to add
    if (backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    textSize(30);
    
    

    if (hour%12<12){
        fill ("white")
        text("time :"+hour%12+"pm",200,50)

    }
    else if (hour%12>12){
        text ("time :"+hour+"am",200,50)
        fill ("white")
    }
   else if (hour%12===12){
       text ("time :12 noon",200,50)
       fill ("white")
   }
}

    // write code to display time in correct format here
    //chnage to JSON format


async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //chnage to JSON format
    var responseJSON = await response.json();
     datetime = responseJSON.datetime;
   
    // write code slice the datetime
      hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if ( hour=>04 && hour<=06){
        backgroundImg.addImage ("sunrise1.png")

    }else if (hour >=06 && hour<=08){
        backgroundImg.addImage("sunrise2.png")
    }else if ( hour>=23 && hour==0){
        backgroundImg.addImage( "sunset10.png")
    } else if ( hour==0 && hour<=03){
        backgroundImg .addImage("sunset11.png")
    }else {
        backgroundImg.addImage("sunset12.png")
    }
    //load the image in backgroundImg variable here
    //backgroundImg= loadImage(bg);
}
