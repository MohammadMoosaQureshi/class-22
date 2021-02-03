var myEngine,myWorld,myObj,ball; 
function setup() { 
  createCanvas(400,400); 
  myEngine = Matter.Engine.create();
   myWorld = myEngine.world; 
   var op = { isStatic:true } 
   myObj = Matter.Bodies.rectangle(200,350,400,50,op); 
   Matter.World.add(myWorld,myObj); 
   var op1 = 
   { restitution:0.6 ,
    friction:0.5,
    density:1.2
  }


   ball=Matter.Bodies.circle(200,150,20,op1)
   Matter.World.add(myWorld,ball); 
  
  }
   function draw(){
      background("black"); 
      Matter.Engine.update(myEngine); 
      console.log(myObj) 
      rectMode(CENTER) 
      ellipseMode(RADIUS)
      ellipse(ball.position.x,ball.position.y,20,20)
      rect(myObj.position.x,myObj.position.y,400,50); 
    }
