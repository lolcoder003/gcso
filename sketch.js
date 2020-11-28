var car1, car2, car3, car4, wall;
var speed1, speed2, speed3, speed4, weight;
var b1, b2, b3, b4
var deformation1, deformation2, deformation3, deformation4;


function setup() {
  createCanvas(1535, 750);

  speed1 = random(55, 90);
  speed2 = random(55, 90);
  speed3 = random(55, 90);
  speed4 = random(55, 90);

  weight = random(400, 1500);

  car1 = createSprite(140, 50, 50, 50);
  car1.velocityX = 0;
  car1.shapeColor = "red";

  car2 = createSprite(140, 155, 50, 50);
  car2.velocityX = 0;
  car2.shapeColor = "yellow";

  car3 = createSprite(140, 280, 50, 50);
  car3.velocityX = 0;
  car3.shapeColor = "pink";

  car4 = createSprite(140, 385, 50, 50);
  car4.velocityX = 0;
  car4.shapeColor = "green";

  b1 = createSprite(20, 50, 100, 50);
  b1.shapeColor = "violet";
  b2 = createSprite(20, 150, 100, 50);
  b2.shapeColor = "yellow";
  b3 = createSprite(20, 260, 100, 50);
  b3.shapeColor = "green";
  b4 = createSprite(20, 385, 100, 50);
  b4.shapeColor = "cyan" ;
  wall = createSprite(1500, -40, 60, 1000);
  wall.shapeColor = "brown";
  deformation1 = Math.round(0.5 * 2170 * Math.round(speed1) * Math.round(speed1) / 22500);
  deformation2 = Math.round(0.5 * 1550 * Math.round(speed2) * Math.round(speed2) / 22500);
  deformation3 = Math.round(0.5 * 1800 * Math.round(speed3) * Math.round(speed3) / 22500);
  deformation4 = Math.round(0.5 * 615 * Math.round(speed4) * Math.round(speed4) / 22500);
}

function draw() {
  background(0);
  drawSprites();

 fill(0);
 noStroke();
 textSize(32);
 text("car1",2,60);
 text("car2 ",2,160); 
 text("car3 ",2,270); 
 text("car4",2,395);

  fill(255);
  stroke("blue");
  strokeWeight(5);
  textSize(40);
  text("Car Name", 100, 500);
  text("Weight)", 500, 500);
  text("Speed", 925, 500);
  text("Deformation", 1250, 500);

  noStroke();
  fill(255);
  rect(0, 87, 1470, 5);
  rect(0, 198, 1470, 5);
  rect(0, 330, 1470, 5);
  rect(0, 450, 1600, 5);
  rect(0, 550, 1600, 5);
  rect(0, 600, 1600, 5);
  rect(0, 650, 1600, 5);
  rect(0, 700, 1600, 5)

  for (var x = 400; x < 1300; x = x + 400) {
    fill("white");
    rect(x, 450, 5, 500);
    rect(50, 450, 5, 500);
  }

  if (keyDown("1")) {
    car1.velocityX = speed1;
  }

  if (keyDown("2")) {
    car2.velocityX = speed2;
  }

  if (keyDown("3")) {
    car3.velocityX = speed3;
  }

  if (keyDown("4")) {
    car4.velocityX = speed4;
  }

  if ( car1.isTouching(wall) ) {

    car1.velocityX = 0;
    
    fill("white");
    text("car1", 130, 585);
    text(2170, 530, 585);
    text(Math.round(speed1), 930, 585);
    text(deformation1, 1350, 585)
    }
  

  if (car2.isTouching(wall)) {

    car2.velocityX = 0;

    fill("white");
    text("car2", 130, 635);
    text(1550, 530, 635);
    text(Math.round(speed2), 930, 635);
    text(deformation2, 1350, 635)

  }

  if (car3.isTouching(wall)) {

    car3.velocityX = 0;

    fill("white");
    text("car3", 130, 685);
    text("1800", 530, 685);
    text(Math.round(speed3), 930, 685);
    text(deformation3, 1350, 685)

  }

  if (car4.isTouching(wall)) {

    car4.velocityX = 0;

    fill("white");
    text("car4", 130, 735);
    text("615", 530, 735);
    text(Math.round(speed4), 930, 735);
    text(deformation4, 1350, 735);

  }

}