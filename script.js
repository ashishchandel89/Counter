let congratulation = document.querySelector("h3");
let count = document.querySelector("h1");
let button1 = document.querySelector("#btn1");
let refresh=document.querySelector("#refresh");
let h2=document.querySelector('h2');

let counter = 0;
let target = 108;
let refresh1=0;
let mala=0;

button1.addEventListener("click", function () {

    counter++;
    count.innerHTML = counter;

    // show message at target
    if (counter === target) {
        mala++;
        h2.innerHTML=mala ;
        congratulation.innerHTML ="✨🌸 बधाई हो! आपने " + target + " नाम-जप पूरे कर लिए ✨🌸";
        congratulation.style.color = "white";
         
        target += 108;   
        
    }

    // clear message on next click
    if (counter === target - 108 + 1) {
        congratulation.innerHTML = "";
        congratulation.style.color = "black";
    }
});



refresh.addEventListener("click",function(){
        counter=0;
        target=108;
        count.innerHTML = counter;
        congratulation.innerHTML = "";
});


