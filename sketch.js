var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight=300;
var score = 0;
var count = 0;
var gameState ="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,40);
  fill("white");
  textSize(20)
  text(" 500 ", 10, 550);
  text(" 500 ", 85, 550);
  text(" 500 ", 165, 550);
  text(" 500 ", 245, 550);
  text(" 100 ", 325, 550);
  text(" 100 ", 405, 550);
  text(" 100 ", 485, 550);
  text(" 200 ", 565, 550);
  text(" 200 ", 645, 550);
  text(" 200 ", 725, 550);
 
  
  Engine.update(engine);
  ground.display();
  
  if ( count>= 5) {
    gameState ="end";
    textSize(100);
    text("Time up", 150, 250);
  }
if(score>1200){
  textSize(30)
  fill(255)
  text("Congratulations You Win",200,200);
}



  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
  for (var i = 0; i < particles.length; i++) {
     particles[i].display();
      
     if (particles[i].body.position.x < 300 && particles[i].body.position.y>760) {
      score=score+500;
      particles.pop();
     }
    else if (particles[i].body.position.x < 600 && particles[i].body.position.x > 301 && particles[i].body.position.y > 760) {
      score = score + 100;
      particles.pop();
    }
    else if (particles[i].body.position.x < 900 && particles[i].body.position.x > 601 && particles[i].body.position.y > 760) {
      score = score + 200;
      particles.pop();
    }
   }

   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
 
}
function mousePressed(){
  if(gameState!=="end"){
      count++;
     particles.push(new Particle(mouseX, 10, 10, 10)); 
  }   
}

