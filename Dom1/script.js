// let h2=document.querySelector("h2");
// let button=document.querySelector("#btn");
// let isFriend=false;

// button.addEventListener("click",function(){
//     if(isFriend===false){
//     h2.innerHTML="Friend";
//     button.innerHTML="Unfollow";
//     isFriend=true;

// }
// else{
//     h2.innerHTML="Stranger";
//     button.innerHTML="Follow";
//     isFriend=false;
// }
// })

// let arr=["ashish","manish","harish","ashok","poonam","rohit","bharat","faizan","kartik","harman","ishan"];
// let a=Math.floor(Math.random()*(arr.length));
// console.log(arr[a]);


let color_div=document.querySelector("#color");
let btn=document.querySelector("#btn");



btn.addEventListener("click",function(){
    let r=Math.floor(Math.random()*(256));
    let g=Math.floor(Math.random()*(256));
    let b=Math.floor(Math.random()*(256));
    color_div.style. backgroundColor= `rgb(${r},${g},${b})`;
})