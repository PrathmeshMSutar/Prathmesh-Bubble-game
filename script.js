
var timer = 60;
var score = 0;
var clickednum=0;
var hitrn=0;

function increaseScore(){
    score += 10;
    document.querySelector("#score").textContent=score;
}
function makeBubble(){var clutter="";
for(var i = 1; i<=189; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML= clutter;  
        }

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}
    
function runTimer(){
    
var timerint=setInterval(function() {
       if(timer>0){ timer--;
        document.querySelector("#timerval").textContent = timer;
    }else
    {
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML= "";
    }
  }, 1000);
}


document.querySelector("#pbtm")
.addEventListener("click",function(dets){
    clickednum = (Number(dets.target.textContent));
    if(clickednum===hitrn){
        increaseScore();
        getNewHit();
        makeBubble();

    }
    else{
        getNewHit();
        
    }
});
makeBubble();
runTimer();




 



