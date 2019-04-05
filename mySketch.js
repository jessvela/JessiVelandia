                                                                                                                                                                                                                                                                                                                                             
var dir1;
var dir2;
var velo1;
var velo2;
var di;
var colorC;
var rotacion ;
let cambio=0;
w=255;
e=200;
q=300;
let img,img1,img2;


function preload() {
	img=loadImage('nombre2.png');
	img1=loadImage('behance.png');
	img2=loadImage('open.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
  strokeWeight(20);
  frameRate(60);
	
	
	rotacion= new Rotar(5, 5, 60, 70, color('#D3576A'));
  di=0;
  colorC = color('#BF5E6D');
	noCursor();
}

function draw() {
	 for (let i = 0; i < width; i++) {
   var r = random(w);
   var g = random(e);
   var b = random(q);
    stroke(r, g, b, 5);
		 
    line(i, 0, i, height);
	 }	 
	if(cambio>5){
		
	w=w-20;
		
		if(w<=0){
			w=255-random(20);
		}
		q=q-10;
		if(q<=0){
			q=300-random(10);
		}
		cambio=0;
	}
	
		 cambio=cambio+0.08;
	
		rotacion.display(); 

  if (di==0) {

    rotacion.move1();
		
		
  }
  if (mouseY<height/2) {
    if (mouseIsPressed==true) {
      di=1;
    }
  }

  if (mouseY>height/2) {
    if (mouseIsPressed==true) {
      di=2;
    }
  }

  if (mouseX>width/2+200) {
    if (mouseIsPressed==true) {
      di=3;
    }
  }
  if (mouseX<width/2-200) {
    if (mouseIsPressed==true) {

      di=4;
    }
  }

  if (di==1) {
    rotacion.move2();
  }
  if (di==2) {
    rotacion.move1();
  }
  if (di==3) {
    rotacion.move3();
  }
  if (di==4) {
    rotacion.move4();
  }
	//tint(255,255,255);
	//image(img1,500,300);
	image(img,280,90);
	//tint(0,100,200,126);
	//image(img2,0,300);
	texto();

}
function texto(){
	noStroke();
	
	fill(254, 247, 229,190);
	textFont('Gotham');
	textAlign(CENTER);
	textStyle(BOLD);
	textSize(25);
	//text("Jessi Velandia", width/2, height - 4*(height/11) );
	
	
	if(mouseIsPressed){
		fill(255,170,0,170);
	}
	else{
		//fill(245,245,220,170);
		fill(254, 247, 229,190);
	}
	
	//textStyle(NORMAL);
	textSize(20);
	text("OpenProcessing", width/2, height - 3*(height/11) );
	//noFill();
	//stroke(254, 247, 229,190);
	fill(255,170,0,30);
	rect(width/2-200,height - 3*(height/11)-30,400,50);
	fill(254, 247, 229,190);
	
	
	text("Behance", width/2, height - 2*(height/11) );
	fill(255,170,0,30);
	rect(width/2-200,height - 2*(height/11)-30,400,50);
	fill(254, 247, 229,190);
	
	
}
function mousePressed(){
	if(mouseX > (width/2-200) && mouseX <(width/2+200) && mouseY> (height - 3*(height/11)-30) && mouseY<(height - 3*(height/11)+20) ){
		window.open('https://www.openprocessing.org/user/122159');
	}
	if(mouseX> (width/2-200) && mouseX<(width/2+200) && mouseY> (height - 2*(height/11)-30) && mouseY<(height - 2*(height/11)+20) ){
		window.open('https://www.behance.net/jessigizeh');
	}

}