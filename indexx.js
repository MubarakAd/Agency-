var one=prompt("enter player name of first player")
var two=prompt("enter player name of second player")
var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
var attr ="images/dice"+randomnumber1+".png";
var attr2="images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src",attr);
document.querySelectorAll("img")[1].setAttribute("src",attr2);
if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML=one+" is winner";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML=two+" is winner";

}
else{

    document.querySelector("h1").innerHTML="draw";

}