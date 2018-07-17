////var randomLoc = Math.floor(Math.random()*5); 
////var location1 = randomLoc;
////var location2 = location1 + 1;
////var location3 = location1 + 2;
////var guess;
////var hits = 0;
////var guessses = 0;
////var isSunk = false;
////
////while(isSunk == false)
////    {
////        guess = prompt('Podaj liczbę z zakresu od 0 do 6:');
////        if(guess < 0 || guess > 6)
////            {
////                alert("Podaj prawidłową wartość !");
////            }
////        else { guessses = guessses + 1;
////            if(guess == location1 || guess==location2 ||guess==location3)
////                {
////                    hits += 1;
////                    alert('Trafienie');
////                    if(hits == 3)
////                        {
////                            isSunk = true;
////                            alert("Zatopiłeś okręt!");    
////                        }
////                }
////              else {
////                  alert('Pudło frajerze!');
////              }
////        }
////    }
////var stats = "Potrzebowałeś" + "prób żeby zatopic jeden statek, twoja efektywność wynosi:"+ (3/guessses);
////alert(stats);
//
//function setArea(){
//    var row = document.getElementById("rowId").value;
//    var col = document.getElementById("colId").value;
//    console.log(row);
//    console.log(col);
//}

var col = 10;
var row = 10;
var size = 50;

var battleArea = document.getElementById("battleArea");


for(i = 0;i < col; i++){
    for(j = 0;j < row; j++){
        var area = document.createElement("div");
        battleArea.appendChild(area);
        
        area.id = 'Area' + j + i;			

        var topArea = i * size;
        var leftArea = j * size;
        
        area.style.top = topArea + 'px';
        area.style.left = leftArea + 'px';
        }
}

var x,y;
var count = 0;
while(count <= 2){
    x = Math.floor(Math.random()*7);
    y = Math.floor(Math.random()*7);
    if(!($("div#Area"+x+y).hasClass("ship"))){  
        $("div#Area"+x+y).addClass("ship");
        $("div#Area"+(x+1)+y).addClass("ship");
        $("div#Area"+(x+2)+y).addClass("ship");
        count++;
    }
}

var myArea= $('div');
var count=0;
var points = 0;

myArea.on("click",function (){
        count++;
        if($(this).hasClass("ship")){ 
            $(this).css({background:"red"});
            $(this).off("click");
            $(this).addClass("destroyed");
            points ++;
                if(points > 8)
                {
                    alert("wygrałeś!");
                    console.log(points);
                }
        }
        else{
        $(this).css({background:"pink"});
        $(this).off("click");
        }
});