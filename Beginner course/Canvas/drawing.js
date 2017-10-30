var d = document.getElementById("draw1");
var lienzo = d.getContext("2d");
DrawLine("blue", 10, 300, 220, 10);
DrawLine("green", 250, 300, 10, 220);
function DrawLine(color, x_begin, y_begin, x_final, y_final)

{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_begin, y_begin);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}