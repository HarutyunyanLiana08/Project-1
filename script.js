let number = document.getElementById("number")


let input0=document.getElementById("input0");
let input1=document.getElementById("input1");
let input2=document.getElementById("input2");
let input3=document.getElementById("input3");
let input4=document.getElementById("input4");
let input5=document.getElementById("input5");


let sum=0
function inc(action){
if(action==0){
    number.textContent= sum+= +input0.value}
else if (action==1){
    number.textContent= sum+= +input1.value}
else if (action==2){
    number.textContent= sum+= +input2.value}
else if (action==3){
    number.textContent= sum += +input3.value}
else if (action==4){
    number.textContent= sum += +input4.value}
    else if (action==5){
        number.textContent= sum += +input5.value}}