var change=0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);

}

function draw() {
	stroke('#FF5733');
	fill(change);
	ellipse(mouseX, mouseY, 50, 50);
}

function mousePressed() {
 // if (change == true) {
    change = 255;
//  }
}

function mouseReleased(){

    change = 0;

}
