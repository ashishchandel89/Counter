let btn=document.querySelector('#btn');
let h1=document.querySelector('h1');
let progress=document.querySelector('#progress');

let count=0;
let stop=setInterval(function(){
    console.log(count);
    count++;
},1000);

setTimeout(function() {
    clearInterval(stop);
}, 21*1000);