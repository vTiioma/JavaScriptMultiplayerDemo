var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

window.addEventListener('resize',resizeCanvas,false);

function redraw() {
  context.beginPath();
  context.rect(0, 0, window.innerWidth, window.innerHeight);
  context.fillStyle = 'yellow';
  context.fill();
  context.lineWidth = 7;
  context.strokeStyle = 'black';
  context.stroke();
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  redraw();
}

resizeCanvas();
