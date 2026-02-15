let main=document.querySelector('main');
let pointer=document.querySelector('#cursor');

main.addEventListener("mousemove",function(dets){
    pointer.style.left=dets.x+'px';
    pointer.style.top=dets.y+'px';
})


