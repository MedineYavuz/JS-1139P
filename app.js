
// takım adları

let startName = prompt("Takım adını giriniz");
let elements = document.getElementsByClassName("teamName");

for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = startName;
}

let startName2 = prompt("Takım adını giriniz");
let elements2 = document.getElementsByClassName("teamName");

for (let i = 0; i < elements2.length; i++) {
    elements2[i].innerHTML = startName2;
}





// arttırma ve azaltma

let counter = document.getElementById('counter1');

let increase=document.querySelector("#increase1");
let decrease=document.getElementById("decrease1");

let count=0;



increase.addEventListener("click", function(){
    count++;
    counter.innerHTML=count;
})

decrease.addEventListener("click", function(){
    count--;
    counter.innerHTML=count;
})


let counter2 = document.getElementById('counter2');

let increase2=document.querySelector("#increase2");
let decrease2=document.getElementById("decrease2");

let count2=0;



increase2.addEventListener("click", function(){
    count2++;
    counter2.innerHTML=count2;
})

decrease2.addEventListener("click", function(){
    count2--;
    counter2.innerHTML=count2;
})

// button prompt

let button1= document.getElementById("button1");

button1.addEventListener("click",function(){

let gol=prompt("gol sayısı giriniz");

if (isNaN(gol)) {
    alert("Lütfen sayı giriniz");
} else {
    // Sayıya çevrilen gol değerini counter1'e yazdır
    counter1.innerHTML = Number(gol);
};

counter1.innerHTML=gol;


})

let button2= document.getElementById("button2");

button2.addEventListener("click",function(){

let gol2=prompt("gol sayısı giriniz");

if (isNaN(gol2)) {
    
    alert("Lütfen sayı giriniz");
} else {
  
    counter2.innerHTML = Number(gol2);
};

counter2.innerHTML=gol2;


})




