class Pakiman
    {
        constructor(n,l,a)
        {
            this.image  = new Image();
            this.name = n;
            this.life = l;
            this.attack = a; 
            
            this.image.src = images[this.name]
        }
        speak()
        {
            alert(this.name);
        }
        show()
        {
            document.body.appendChild(this.image);
            document.write("<p>");
            document.write("<strong>" + this.name + "</strong><br/>");
            document.write("Life: " + this.life + "<br />");
            document.write("Attack: " + this.attack + "<hr>");
            document.write("</p>");
        }
     }