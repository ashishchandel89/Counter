let h2=document.querySelector("h2");
let button=document.querySelector("#btn");
let isFriend=false;

button.addEventListener("click",function(){
    if(isFriend===false){
    h2.innerHTML="Friend";
    button.innerHTML="Unfollow";
    isFriend=true;

}
else{
    h2.innerHTML="Stranger";
    button.innerHTML="Follow";
    isFriend=false;
}
})

