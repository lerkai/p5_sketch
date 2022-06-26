let R = 255;
let G = 255;
let B = 255;
let extraCanvas;
let Bb;
let Bb1;
let D;
let D1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  extraCanvas = createGraphics(windowWidth, windowHeight);
  extraCanvas.clear();  
  Y = windowHeight/2;
  X = windowWidth/2;
  background(0);
  Bb = new b();
  Bb1 = new b();
  D = new d();
  D1 = new d();
}

function draw() {
  background(0);
  image(extraCanvas, 0, 0);
  fill(R, G, B);
  
  Bb.s();
  Bb.m();
  Bb.e();
  
  Bb1.s();
  Bb1.m();
  Bb1.e();
  
  if(mouseIsPressed){
    D.s();
    D.m();
  }

  if(keyIsPressed){
    D1.s();
    D1.m();
  }
}

function keyPressed(){ 
  if (key === "c"){
    R = random(0, 255);
    G = random(0, 255);
    B = random(0, 255);
  }
  if(key === "n"){
    extraCanvas.clear();
  }
}

class b {
  constructor() {
    this.x = 200;
    this.y = 200;
  }
  m(){
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  s(){
    noStroke();
    fill(255);
    rect(this.x, this.y, 20, 20);
  }
  e(){
  if(this.x < 0){
    this.x = windowWidth/2;
  }else if(this.x > windowWidth){
    this.x = windowWidth/2;
  }
  
  if(this.y < 0){
    this.y = windowHeight/2;
  }else if(this.y > windowHeight){
    this.y = windowHeight/2;
  }
  }
}

class d {
  constructor() {
    this.X = mouseX;
    this.Y = mouseY;
  }
  s(){
    extraCanvas.noStroke()
    extraCanvas.fill(R, G, B);
    extraCanvas.circle(this.X, this.Y, 5);
  }
  m(){
      if(this.X < mouseX){
        this.X = this.X+1;
      } else if(this.X > mouseX){
        this.X = this.X-1;
      }
     if(this.Y < mouseY){
       this.Y = this.Y + 1;
      } else if(this.Y > mouseY){ 
        this.Y = this.Y - 1;
      }
    }
}