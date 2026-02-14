let btn=document.querySelector('.btn');
let h1=document.querySelector('h1');
let progress=document.querySelector('#progress');

let count=0;

btn.addEventListener('click',function(){
    btn.style.pointerEvents='none';
   let num=Math.floor(Math.random()*100);
    count=0;
    let stop=setInterval(function(){
    count++;
    h1.innerHTML=`${count}%`;
    progress.style.width=`${count}%`;
},num);
   setTimeout(function(){
    clearInterval(stop);
    btn.style.opacity=0.5;
    btn.innerHTML="Downloaded"
   },num*100);
})
