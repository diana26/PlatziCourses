var x = document.getElementById("drawOne");
var paper = x.getContext("2d");
var x_ini = random(0,420);
var y_ini = random(0,420);
var movement = 15;

// JSON to create variable with objets
var Keys =
{
   LEFT: 37,
   UP: 38,
   RIGHT: 39,
   DOWN: 40
};

var font = {
    url: "tile.png",
    cargaOK: false
};

var cow = {
    url: "vaca.png",
    cargaOK: false
};

var pig = {
    url: "cerdo.png",
    cargaOK: false,
    posX : x_ini,
    posY : y_ini
};
// Create new images, add the url from the variables above and use addEventListener with "load" and function as parameters.
var amount = random(10,2);
var amountChicken = random(10,1);
font.objeto = new Image();
font.objeto.src = font.url;
font.objeto.addEventListener("load", loadFont);

cow.objeto = new Image();
cow.objeto.src = cow.url;
cow.objeto.addEventListener("load", loadCow);

pig.objeto = new Image();
pig.objeto.src = pig.url;
pig.objeto.addEventListener("load", loadPig);
document.addEventListener("keydown", drawKeyboard);

// Create first functions
function loadFont()
{
    font.cargaOK = true;
    draw();
}

function loadCow()
{
    cow.cargaOK = true;
    draw();
}

function loadPig()
{
    pig.cargaOK = true;
    draw();
}

function draw()
{
    if (font.cargaOK)
        {
            paper.drawImage(font.objeto, 0, 0);
        }
    if(cow.cargaOK)
        {
            // Using "for" to draw 10 cows on the font.
            for(var i=0; i<amount; i++)
                {
                // Variables to find random numbers between 0 and 420 using random function.
                var x = random(0,7);
                var y = random (0,7);
                var x = x * 60;
                var y = y * 60;
                paper.drawImage(cow.objeto, x, y);
                }
        }
    
}

function drawPig()
{
if(pig.cargaOK)
        {
           paper.drawImage(pig.objeto, pig.posX, pig.posY);
        
        }
}
function drawKeyboard(event)
{  
    
    switch(event.keyCode)
        {
        case Keys.LEFT: 
        if(pig.posX > 0)
            {
                pig.posX = pig.posX-movement;
                clear();
                drawPig();
            }
        break;
        case Keys.UP: 
            if(pig.posY > 0)
                {
                    pig.posY = pig.posY-movement;
                    clear();
                    drawPig();
                }
        break;
        case Keys.RIGHT: 
            if(pig.posX < paper.width - 80)
                {
                    pig.posX = pig.posX + movement;
                    clear();
                    drawPig();
                }
        break;
        case Keys.DOWN: 
            if(pig.posY < paper.width - 80)
                {
                    pig.posY = pig.posY + movement;
                    clear();
                    drawPig();
                }
        break;
        default:
        console.log("There's no an arrow key");
        break;
        }
}

function clear()
{
    paper.clearRect(0,0,paper.width, paper.height);
    draw();
    
}

function random(min,max)
{
    var result = Math.floor(Math.random() * (max-min+1))+min;
    return result;
}