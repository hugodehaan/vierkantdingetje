var x, y, vx, vy x2, y2;

function setup() {
	createCanvas(500, 400);

  x= 0;
  x2=50;
  y2=50;
  y= 200;
  vx = 8;
  vy=5;
}



function draw() {
	background(225);
  drawball()
	
function drawball(){
ellipse(x,y,80,80)
  x=x+vx;
  y=y+vy;

    if (y<=0||y>=400){
    vy=vy*-1;
  }

	

  if(x <= 0 || x>=500){
    vx=vx*-1;
  }


}
}
