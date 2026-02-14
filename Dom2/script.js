let btn=document.querySelector('.btn');
let main=document.querySelector('main');
let body=document.querySelector('body');
main.addEventListener("mousemove",function(){
    let div=document.createElement('div');
    let left=Math.random()*100;
    let top=Math.random()*100;
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let rot=Math.floor(Math.random()*360);
    let scale=Math.floor(Math.random()*2);

   div.style.width="50px";
   div.style.height="50px";
   div.style.borderRadius="50%";
   div.style.backgroundColor=`rgb(${r},${g},${b})`;
   div.style.position="absolute";
   div.style.left=`${left}%`;
    div.style.top=`${top}%`;
    div.style.rotate=`${rot}deg`;
    div.style.scale=`${scale}`;

   body.appendChild(div);
});