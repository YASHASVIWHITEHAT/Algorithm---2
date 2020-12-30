var movingrect,fixedrect;

function setup(){
createCanvas(1200,800);
movingrect=createSprite(400,400,50,100);
fixedrect=createSprite( 500,600,50,100);
movingrect.shapeColor="green";
fixedrect.shapeColor="green";
fixedrect.debug=true;
movingrect.debug=true;

}

function draw(){
  background(0);
movingrect.x=World.mouseX;
movingrect.y=World.mouseY;
 if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 && 
  fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 && 
  fixedrect.y-movingrect.y <movingrect.height/2+fixedrect.height/2 &&
  movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 ){
  movingrect.shapeColor="red";
  fixedrect.shapeColor="red";
 }
else{
  movingrect.shapeColor="green";
fixedrect.shapeColor="green";
}

drawSprites();


}