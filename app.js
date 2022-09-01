const  screen =document.querySelector(".screen h2");
const lightButton = document.querySelector(".lightButton");
const darkButton = document.querySelector(".darkButton");
const calculator = document.querySelector(".calculator ");
const miniScreen = document.querySelector(".screen h3")
lightButton.onclick = ToggleLight;
darkButton.onclick = ToggleDark;
function ToggleLight() {
    calculator.classList.remove("dark");
}
let x="";
let sign ="";
let type ="";
let y ="";
let history = [];
function ToggleDark() {
    calculator.classList.add("dark");
}
const  A0 =document.querySelector("#A0");
A0.onclick =  handleNumbers;
const  a1 =document.querySelector("#a1");
a1.onclick =  handleNumbers;
const  a2 =document.querySelector("#a2");
a2.onclick =  handleNumbers;
const  a3 =document.querySelector("#a3");
a3.onclick =  handleNumbers;
const  a4 =document.querySelector("#a4");
a4.onclick =  handleNumbers;
const  a5 =document.querySelector("#a5");
a5.onclick =  handleNumbers;
const  a6 =document.querySelector("#a6");
a6.onclick =  handleNumbers;
const  a7 =document.querySelector("#a7");
a7.onclick =  handleNumbers;
const  a8=document.querySelector("#a8");
a8.onclick =  handleNumbers;
const  a9 =document.querySelector("#a9");
a9.onclick =  handleNumbers;

const add =document.querySelector("#add");
add.onclick = handleSigns;

const divide =document.querySelector("#divide");
divide.onclick = handleSigns;

const times =document.querySelector("#times");
times.onclick = handleSigns;

const minus =document.querySelector("#minus");
minus.onclick = handleSigns;

const equal =document.querySelector("#equal");
equal.onclick = handleEquals;

const ac =document.querySelector("#ac");
ac.onclick = handleAc;

function handleNumbers(event) {
    if(sign){
        y += event.target.innerText;
    }
    else{
        x += event.target.innerText;
    }

    
    updateScreen();
    
}
function handleSigns(event) {
    if(!x) return;
    sign = event.target.innerText;
    type = event.target;
    updateScreen();
}

function handleEquals(event){
   if(!x) return;
   updateScreen(miniScreen);
   calculate();
   reset();
}
function handleAc(){
    reset();
    screen.innerText = 0;
    miniScreen.innerText = 0;
}

function updateScreen( output = screen) {
   output.innerText = x + sign + y;
    
}
function calculate(){
    if (type === add){
        screen.innerText = Number(x) + Number(y);
    }
    if (type === minus){
        screen.innerText = Number(x) - Number(y);
    }

    if (type === times){
        screen.innerText = Number(x) * Number(y);
    }

    if (type === divide){
        screen.innerText = Number(x) / Number(y);
    }
}

function reset(){
    x =""
    sign = ""
    type =""
    y = ""
}