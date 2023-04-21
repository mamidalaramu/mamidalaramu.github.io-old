var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

function fillRe(){
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function setBackgroundColor(color) {
  
  ctx.fillStyle = color;
  fillRe();
  
}

var colors = ["#FF6138", "#FFBE53", "#2980B9", "#282741"];

canvas.addEventListener('click', function() {
  
  var color = colors[Math.floor(Math.random()*colors.length)]
  
  setBackgroundColor(color);
  // animate();
});
