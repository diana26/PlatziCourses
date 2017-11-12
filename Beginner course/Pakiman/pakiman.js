var images = [];
images["Cauchin"] = "vaca.png";
images["Pokacho"] = "pollo.png";
images["Tocinauro"] = "cerdo.png";



var collection = [];
collection.push(new Pakiman("Cauchin", 100, 30));
collection.push(new Pakiman("Pokacho", 80,50));
collection.push(new Pakiman("Tocinauro", 120,40));
                
for(var pakis of collection)
    {
        pakis.show();
    }