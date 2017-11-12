var number = 100;
var div = false;
for(var i=1; i<=100; i++)
    {
        div = false;
        if(isDivisible(i,3))
            {
                div = true;
                document.write("Fizz");
            }
        if (isDivisible(i,5))
            {
                div = true;
                document.write("Buzz");
            }
        if(!isDivisible(i,3) && !isDivisible(i,5))
            {
                document.write(i);
            }
        document.write("<br>")
    }
function isDivisible(num, divisor)
{
    if(num % divisor == 0)
        {
            return true;
        }
    else{
        return false;
    }
}