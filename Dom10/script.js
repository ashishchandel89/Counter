let Allbtn=document.querySelectorAll(".btn");

Allbtn.forEach(function(elem){
        elem.addEventListener("click",function(){
            if(elem.innerHTML=='Add'){
                elem.innerHTML="Remove";
                elem.style.backgroundColor="red";
            }
            else{
                elem.innerHTML="Add";
                elem.style.backgroundColor="purple";
            }
        })
})