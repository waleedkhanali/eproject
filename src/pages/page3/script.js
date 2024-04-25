var a = 0;
var imgArray = {
    0:"images/nobel1.jpg",
    1:"images/nobel2.webp",
    2:"images/nobel3.jpg",
    3:"images/nobel4.webp"    
}
fetch("https://api.nobelprize.org/2.1/laureates?_ga=2.62005032.501904792.1706590593-327840894.1706590593")
.then(data =>{
    return data.json();
    
})
.then(data1 => {
    document.getElementById("loader").style.display="none";
    var length = data1.laureates.length;
    var prizes = document.getElementById("prizes");
    for(var i=0;i<length;i++){
        var div = document.createElement("div");
        div.className = "prizes-div";
        var name = document.createElement("h2");
        name.className="prizes-name"
        var category = document.createElement("p");
        category.className="prizes-catogary"
        var motivation = document.createElement("p");
        motivation.className="prize-motivation"
        var img = document.createElement("img");
        var button = document.createElement("button");
        button.className = "prizes-button"
        button.innerHTML = "ReadMore"
        img.src = imgArray[a];
        img.className = "prizes-img";
        img.alt = "img";    
        name.textContent = data1.laureates[i].knownName.en;
        category.textContent = data1.laureates[i].nobelPrizes[0].categoryFullName.en;
        motivation.innerHTML = data1.laureates[i].nobelPrizes[0].motivation.en;
       prizes.appendChild(div);
       div.appendChild(img);
        div.appendChild(name)
       div.appendChild(category)
       div.appendChild(motivation)
       div.appendChild(button);
       if(a==3){
      a=0
       }else{
        a++
       }
    }
    })