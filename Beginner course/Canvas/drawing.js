var text = document.getElementById("txtLine");
var button = document.getElementById("btn");
button.addEventListener("click", DrawByClic);
var d = document.getElementById("draw1");
var Width = d.width;
var lienzo = d.getContext("2d");

function DrawLine(color, x_begin, y_begin, x_final, y_final)

{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_begin, y_begin);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}
function DrawByClic()
{   
    
    var lines = parseInt(text.value);
    var space = Width/lines;
    var L = 0;
    var x_f, y_i;
    for (L = 0; L < lines; L++)
    {
    x_f = space * (L+1);
    y_i = space * L;
    DrawLine("#6495ED", 0, y_i, x_f, 300);
    console.log("line" + L);
    }
    DrawLine("#6495ED", 1, 1, 1, 299);
    DrawLine("#6495ED", 1, 299, 299, 299);
}