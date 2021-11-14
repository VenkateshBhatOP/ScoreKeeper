const p1d=document.querySelector("#p1Display");
const p2d=document.querySelector("#p2Display");

const p1b=document.querySelector("#p1Button");
const p2b=document.querySelector("#p2Button");



let count1=0;
let count2=0;
let max=5;

let isGameOver=false;

p1b.addEventListener("click",()=>{
    if(!isGameOver){
    count1+=1;
    if(count1==max){
        isGameOver=true;  
    }
    }
    p1d.textContent=count1;
})

p2b.addEventListener("click",()=>{
    if(!isGameOver){
    count2+=1;
    if(count2==max){
        isGameOver=true;  
    }
    }
    p2d.textContent=count2;
})