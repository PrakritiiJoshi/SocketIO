
var socket;

function setup() {
  createCanvas(500, 800);
  background(0);

  socket = io.connect('http://localhost:3000');

  socket.on('mouse',
 
    function(data) {
  
        console.log("Got: " + data.x + " " + data.y);
      

      noStroke();
      strokeWeight(1);
      r = random(255);
      b = random(255);
      g = random(255);
      stroke(r,g,b);
      line(data.x-66, data.y, data.x+66, data.y);
      line(data.x, data.y-66, data.x, data.y+66);
         
    


    }
  );
}

function draw() {
}

function mouseDragged() {
  strokeWeight(2);
  stroke(255);
  ellipse(mouseX,mouseY,25,25);

  mousesent(mouseX,mouseY);
}


function mousesent(xpos, ypos) {

  console.log("mousesent: " + xpos + " " + ypos);
 

  var data = {
    x: xpos,
    y: ypos
  };


  socket.emit('mouse',data);
}

