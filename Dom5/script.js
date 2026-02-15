let  icon=document.querySelector('i');
let img=document.querySelector('#img1');
let heart=document.querySelector('#heart');

img.addEventListener('dblclick',function(){
    icon.style.opacity=1;
    icon.style.transform='translate(-50%,-50%) scale(1) rotate(0deg)';
    heart.classList.remove("ri-heart-3-line");
    heart.classList.add("ri-heart-3-fill");
    heart.style.color = "red";

    setTimeout(function(){
         icon.style.transform='translate(-50%,-350%) scale(1) rotate(60deg)';
    },800)
    setTimeout(function(){
        icon.style.opacity=0;
    },1000)
     setTimeout(function () {
        icon.style.transform = 'translate(-50%,-50%) scale(0) rotate(-60deg)'
         icon.style.opacity=0;
    }, 1200)
})


heart.addEventListener('click',function(){

    if(heart.classList.contains("ri-heart-3-line")){

       
        icon.style.opacity=1;
        icon.style.transform='translate(-50%,-50%) scale(1) rotate(0deg)';

        heart.classList.remove("ri-heart-3-line");
        heart.classList.add("ri-heart-3-fill");
        heart.style.color = "red";

        setTimeout(function(){
            icon.style.transform='translate(-50%,-350%) scale(1) rotate(60deg)';
        },800)

        setTimeout(function(){
            icon.style.opacity=0;
        },1000)

        setTimeout(function () {
            icon.style.transform =
              'translate(-50%,-50%) scale(0) rotate(-60deg)';
        },1200)

    } else {

        

        heart.classList.remove("ri-heart-3-fill");
        heart.classList.add("ri-heart-3-line");
        heart.style.color = "black";

    }

});
