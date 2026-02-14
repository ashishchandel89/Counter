let main=document.querySelector('main');
let body=document.querySelector('body');

main.addEventListener("mousemove",function(){
    
    let arr=["I love learning web development","Ashish builds clean frontend projects.","JavaScript makes websites feel alive.","Coding daily improves problem solving.","Practice makes every developer stronger.","Simple design creates better experiences.","Learn today, build tomorrow always","Bugs teach programmers valuable lessons.","Focus, consistency bring real success.","Curiosity drives innovation in technology."];
    let ar=Math.floor(Math.random()*arr.length);
    let left=Math.random()*100;
    let top=Math.random()*100;
    let rot=Math.floor(Math.random()*360);
    let scale=Math.floor(Math.random()*3);
    let arr1=arr[ar];

    let h1=document.createElement('h1');
    h1.style.left=`${left}%`;
    h1.style.top-=`${top}%`;
    h1.innerHTML=`${arr1}`;  
    h1.style.color="black";
    h1.style.position="absolute";
    h1.style.rotate=`${rot}deg`;
    h1.style.scale= `${scale}`;
   main.appendChild(h1);
});