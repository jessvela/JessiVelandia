class Rotar {

  constructor(velx, vely, x, y, b) {

    this.velo1=velx;
    this.velo2=vely;
    this.dir1=x;
    this.dir2=y;
    this.cort=b;
		this.speed=0.1;
		this.rot=0;
  }

  display() {

    noStroke();
    fill(this.cort, 95);
    push();
    translate(mouseX, mouseY);
    rotate(this.rot);
    rectMode(CENTER);

    rect(0, 0, 10, 75);
    rect(0, 0, 75, 10);

    pop();




    if (this.dir2<height-700) {

      this.dir2=500;
    }

    if (this.dir2>height+150) {

      this.dir2=-150;
    }

    if (this.dir1>width+150) {

      this.dir1=-150;
    }


    if (this.dir1<-100) {

      this.dir1=700;
    }
  }
  move1() {


    this.rot=this.rot+this.speed;
    this.dir2= this.dir2+this.velo2;
  }
  move2() {
    this.dir2=this.dir2-this.velo2;
    this.rot=this.rot-this.speed;
  }

  move3() {
    this.velo1=4;
    this.dir1=this.dir1+this.velo1;
    this.rot = this.rot +this.speed;
  }
 move4() {
    this.velo1=4;

    this.dir1=this.dir1-this.velo1;
    this.rot= this.rot -this.speed;
  }
}
	