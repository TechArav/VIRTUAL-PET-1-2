//Create variables here

function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png");
  dogHappy=loadImage("images/dogImg1.png");
}

var dog, dogImg, dogHappy;
var foodStock, foodS, database;

function setup() {
	createCanvas(800, 700);
  dog=createSprite(400,350,10,10);
  dog.addImage(dogImg);
  dog.sclae=0.1;
  database=firebase.database();
   foodStock=database.ref('Food')
   foodStock.on("value",readStock)
}


function draw() {  

  if(keyDown(UP_ARROW)){
    feedDog();
  writeStock(foodS);
  }

  
  
  drawSprites();
  //add styles here

}

function feedDog(){
  dog.addImage(dogHappy);
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

function readStock(){
  foodS=data.val();
}