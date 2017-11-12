var Keys =
{
   LEFT: 37,
   UP: 38,
   RIGHT: 39,
   DOWN: 40
};
document.addEventListener("keydown", drawKeyboard);
var square = document.getElementById("draw1");
var paper = square.getContext("2d");

DrawLine("green", 149,149,151,151, paper);
var x = 150;
var y = 150;
function DrawLine(color, x_begin, y_begin, x_final, y_final, paper)
{
    paper.beginPath();
    paper.strokeStyle = color;
    paper.lineWidth = 2.5;
    paper.moveTo(x_begin, y_begin);
    paper.lineTo(x_final, y_final);
    paper.stroke();
    paper.closePath();
}
function drawKeyboard(event)
{
    var littleColor = "#d10841";
    var movement = 1;
    switch(event.keyCode)
        {
        case Keys.LEFT: 
        DrawLine(littleColor, x, y, x-movement, y, paper );
            x = x-movement;
        break;
        case Keys.UP: 
            DrawLine(littleColor, x, y, x, y-movement, paper );
            y = y-movement;
        break;
        case Keys.RIGHT: 
            DrawLine(littleColor, x, y, x+movement, y, paper );
            x = x+movement;
        break;
        case Keys.DOWN: 
            DrawLine(littleColor, x, y, x, y+movement, paper);
            y = y+movement;
        break;
        default:
        console.log("There's no an arrow key");
        break;
        }
}