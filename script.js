var body = document.body;
let audioPlaying = false;
let currentTime = 0;

let playButton = document.getElementById('PlayPauseButton'); 
let playButtonImage = document.getElementById('imgPlay'); 

let scene1_1 = document.getElementById('scene1_1');
let scene1_2 = document.getElementById('scene1_2');
let scene2 = document.getElementById('scene2');
let scene3_1 = document.getElementById('scene3_1');
let scene3_2 = document.getElementById('scene3_2');
let scene4_1 = document.getElementById('scene4_1');
let scene4_2 = document.getElementById('scene4_2')
let scene4_3 = document.getElementById('scene4_3')
let scene5_1 = document.getElementById('scene5_1');
let scene5_2 = document.getElementById('scene5_2')
let scene5_3 = document.getElementById('scene5_3')
let scene6_1 = document.getElementById('scene6_1')
let scene6_2 = document.getElementById('scene6_2')

let speed = 1;

let animation;

let height = document.documentElement.clientHeight;
let width = document.documentElement.clientWidth;

let audio = new Audio("soundprojectfinal.mp3");

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

class Bubble{
  constructor(radius, centerX, centerY, angle){
    this.radius = radius;
    this.centerX = centerX;
    this.centerY = centerY;
    this.angle = angle;
  }

  move(){

    // Update the angle to make the bubble move in a circle
    this.angle += 0.01; // You can adjust the angular speed as needed

    // Calculate new x and y positions based on the angle and radius
    this.x = this.centerX + this.radius * Math.cos(this.angle);
    this.y = this.centerY + this.radius * Math.sin(this.angle);
  }
}
let radius = 300
let centerX = width * 0.45; // Adjust the center X-coordinate
let centerY = 0.45 * height; // Adjust the center Y-coordinate

let bubble1_1 = new Bubble(radius, centerX, centerY, 0);
let bubble1_2 = new Bubble(400, centerX, centerY, 0);
let bubble2 = new Bubble(radius, centerX, centerY, 0);
let bubble3_1 = new Bubble(radius, centerX, centerY, 0);
let bubble3_2 = new Bubble(400, centerX, centerY, 0);
let bubble4_1 = new Bubble(radius, centerX, centerY, 0);
let bubble4_2 = new Bubble(400, centerX, centerY, 0);
let bubble4_3 = new Bubble(radius, centerX, centerY, 0);
let bubble5_1 = new Bubble(400, centerX, centerY, 0);
let bubble5_2 = new Bubble(400, centerX, centerY, 0);
let bubble5_3 = new Bubble(radius, centerX, centerY, 0);
let bubble6_1 = new Bubble(200, centerX, centerY, 0);
let bubble6_2 = new Bubble(400, centerX, centerY, 0);

window.onload = function () {
  console.log('Window has loaded.');
  scene2.style.visibility = "hidden";
  scene3_1.style.visibility = "hidden";
  scene3_2.style.visibility = "hidden";
  scene4_1.style.visibility = "hidden";
  scene4_2.style.visibility = "hidden";
  scene4_3.style.visibility = "hidden";
  scene5_1.style.visibility = "hidden";
  scene5_2.style.visibility = "hidden";
  scene5_3.style.visibility = "hidden";
  scene6_1.style.visibility = "hidden";
  scene6_2.style.visibility = "hidden";

  playButton.addEventListener("click", function(){
    if(!audioPlaying){
      audioPlaying = true;
      playButtonImage.src = "images/pause.png";
      audio.play();
      animation = setInterval(displayCharacters, 10);
    }else{
      audioPlaying = false;
      playButtonImage.src = "images/play.png";
      audio.pause();
      clearInterval(animation);
    }
  });
}

function displayCharacters(){
  console.log('displayCharacters function called.');
  currentTime += 10;

  bubble1_1.move();
  bubble1_2.move();
  bubble2.move();
  bubble3_1.move();
  bubble3_2.move();
  bubble4_1.move();
  bubble4_2.move();
  bubble4_3.move();
  bubble5_1.move();
  bubble5_2.move();
  bubble5_3.move();
  bubble6_1.move();
  bubble6_2.move();


  scene1_1.style.left = bubble1_1.x +'px';
  scene1_1.style.top = bubble1_1.y +'px';

  scene1_2.style.left = bubble1_2.x +'px';
  scene1_2.style.top = bubble1_2.y +'px';

  scene2.style.left = bubble2.x +'px';
  scene2.style.top = bubble2.y +'px';

  scene3_1.style.left = bubble3_1.x +'px';
  scene3_1.style.top = bubble3_1.y +'px';

  scene3_2.style.left = bubble3_2.x +'px';
  scene3_2.style.top = bubble3_2.y +'px';

  scene4_1.style.left = bubble4_1.x + 'px';
  scene4_1.style.top = bubble4_1.y + 'px';

  scene4_2.style.left = bubble4_2.x + 'px';
  scene4_2.style.top = bubble4_2.y + 'px';

  scene4_3.style.left = bubble4_3.x + 'px';
  scene4_3.style.top = bubble4_3.y + 'px';

  scene5_1.style.left = bubble5_1.x + 'px';
  scene5_1.style.top = bubble5_1.y + 'px';

  scene5_2.style.left = bubble5_2.x + 'px';
  scene5_2.style.top = bubble5_2.y + 'px';

  scene5_3.style.left = bubble5_3.x + 'px';
  scene5_3.style.top = bubble5_3.y + 'px';

  scene6_1.style.left = bubble6_1.x +'px';
  scene6_1.style.top = bubble6_1.y +'px';

  scene6_2.style.left = bubble6_2.x +'px';
  scene6_2.style.top = bubble6_2.y +'px';

  if (currentTime == 0) {
    scene1_1.style.visibility = "visible";
    scene1_2.style.visibility = "visible";
  }
  if(currentTime == 58000){
    scene1_1.style.visibility = "hidden"
    scene1_2.style.visibility = "hidden"
    scene2.style.visibility = "visible";
    body.style.backgroundColor = '#e1d4d6';
  }

  if(currentTime == 82000){
    scene2.style.visibility = "hidden";
    scene3_1.style.visibility = "visible";
    scene3_2.style.visibility = "visible";
    body.style.backgroundColor = '#d7c5c8';
  }

  if(currentTime == 118900){
    scene3_1.style.visibility = "hidden";
    scene3_2.style.visibility = "hidden";
    scene4_1.style.visibility = "visible"
    scene4_2.style.visibility = "visible";
    body.style.backgroundColor = '#ccb6b9';
  }

  if(currentTime == 137500){
    scene4_1.style.visibility = "hidden";
    scene4_2.style.visibility = "hidden";
    scene4_3.style.visibility = "visible";
    body.style.backgroundColor = '#b4a9ab';
  }

  if(currentTime == 139700){
    scene5_1.style.visibility = "visible";
  }

  if(currentTime == 160000){
    scene4_3.style.visibility = "hidden";
    scene5_1.style.visibility = "hidden"
    scene5_2.style.visibility = "visible"
    scene5_3.style.visibility = "visible"
    body.style.backgroundColor = '#a29899';
  }

  if(currentTime == 177800){
    scene5_2.style.visibility = "hidden"
    scene4_3.style.visibility = "hidden";
    scene6_1.style.visibility = "visible"
  }

  if(currentTime == 191800){
    scene6_2.style.visibility = "visible"
    body.style.backgroundColor = '#908788';
  }

  if(currentTime == 202360){
    scene6_1.style.visibility = "hidden";
    scene6_2.style.visibility = "hidden";
    scene5_3.style.visibility = "hidden";
    body.style.backgroundColor = '#ebe3e4';
    clearInterval(animation);
    playButtonImage.src = "images/reload.png";
    currentTime = 0;
  }
}

