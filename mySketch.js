var change=0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);

}

function draw() {
	stroke('#FF5733');
	fill(change);
	ellipse(mouseX, mouseY, 20, 20);
}

function mousePressed() {

    change = 255;

}

function mouseReleased(){

    change = 0;

}