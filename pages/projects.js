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

// var x = 200;
// var y = 200;
// var radius =30;
// dx = 4;
// dy = 4;
// function animate(){
//   requestAnimationFrame(animate);
//   fillRe();
//   ctx.beginPath();
//   ctx.arc(x,y,radius,Math.PI*2,false);
//   ctx.strokeStyle = 'blue';
//   ctx.stroke();
//   if(x +radius > innerWidth || x -radius < 0){
//     dx = -dx;
//   }
//   x += dx;
//   if(y +radius > innerHeight || y -radius < 0){
//     dy = -dy;
//   }
//   y+=dy;
// }
// console.log(animate)

// console.log(ctx);
