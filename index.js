
var start=prompt("write play to start");
if(start==="play"){
var first=prompt("player one enter your name");
var second=prompt("player two enter your name");
document.querySelectorAll("p")[0].innerHTML=first;
document.querySelectorAll("P")[1].innerHTML=second;
var randomnumber1=Math.floor(Math.random()*6)+1;
var generall="images/dice"+randomnumber1+".png";
document.getElementById("images").setAttribute("src",generall);
 var randomnumber2=Math.floor(Math.random()*6)+1
var generall1="images/dice"+randomnumber2+".png";
document.getElementById("image").setAttribute("src",generall1);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML=first+" is win";
}
   
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML=second+" is win";

}
else{
    document.querySelector("h1").innerHTML="draw";
}
}
else{
    alert("you entered  invalid key");
    alert("please refresh me and enter the valid key to play")
}
