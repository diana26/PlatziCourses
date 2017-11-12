

var square = document.getElementById("draw1");
var paper = square.getContext("2d");
square.addEventListener("mousedown", start);

var xInitial = 100;
var yInitial = 100;
DrawLine("green", xInitial-1, yInitial-1, xInitial+1, yInitial+1, paper);

function start(click)
{
    DrawLine("pink", xInitial, yInitial, click.clientX, click.clientY, paper);
    xInitial = click.clientX;
    yInitial = click.clientY;
    
}

function DrawLine(color, x_begin, y_begin, x_final, y_final, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 2.5;
    lienzo.moveTo(x_begin, y_begin);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}