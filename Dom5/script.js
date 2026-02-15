let img=document.querySelector('img');
let icon=document.querySelector('i');
img.addEventListener('dblclick',function(){
    icon.style.opacity=1;
    icon.style.transform='translate(-50%,-50%) scale(1) rotate(0deg)';
   

    setTimeout(function(){
        icon.style.transform='translate(-50%,-300%) scale(1) rotate(60deg)';
    },1000);

    setTimeout(function(){
        icon.style.opacity=0;
    },1000);
    
});


