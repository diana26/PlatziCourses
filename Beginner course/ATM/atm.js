class Billete
{
    constructor (v,a)
    {
        this.amount= a;
        this.valor= v;
    }
}

var box = [];
box.push(new Billete(100,5) );
box.push(new Billete(50,20) );
box.push(new Billete(20,30) );
box.push(new Billete(10,10) );
box.push(new Billete(5,10) );
var delivered = [];
var money = 0;
var div = 0;
var papers = 0;

var b = document.getElementById("btn1");
b.addEventListener("click", deliverMoney);
var result = document.getElementById("result");


function deliverMoney()
{
    var t = document.getElementById("money");
    money = parseInt(t.value);
    for( var bi of box)
        {
            if (money > 0)
                {
                    div = Math.floor(money/bi.valor);
                    if(div > bi.amount)
                        {
                            papers = bi.amount;
                        }
                    else
                    {
                        papers = div;    
                    }
                    delivered.push(new Billete(bi.valor,papers) );
                    money -= (bi.valor * papers);
                }
        }
    if(money > 0)
        {
            result.innerHTML = "Sorry but this ATM can't have you that amount of money";
        }
     else
         {
             for (var e of delivered)
                 {
                     if(e.amount > 0)
                         {
                            result.innerHTML += e.amount  + " billetes de $" + e.valor + "<br>";
                         }
                 }
         }
         
     
}

