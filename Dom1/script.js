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


// let color_div=document.querySelector("#color");
// let btn=document.querySelector("#btn");



// btn.addEventListener("click",function(){
//     let r=Math.floor(Math.random()*(256));
//     let g=Math.floor(Math.random()*(256));
//     let b=Math.floor(Math.random()*(256));
//     color_div.style. backgroundColor= `rgb(${r},${g},${b})`;
// })

let h1=document.querySelector("h1");
let h2=document.querySelector("h2");
let button=document.querySelector("#btn");
let color_div=document.querySelector("#color");
let main=document.querySelector("main");
let arr=[
    {
        team:"Haryana Steelers",
        captain:"Jaideep",
        dress1:"blue",
        dress2:"white"
    },
    {
        team:"Jaipur Pink Panthers",
        captain:"Manjeet Chhiller",
        dress1:"Pink",
        dress2:"green"
    },
    {
        team:"Puneri Paltan",
        captain:"Aslam Inamdaar",
        dress1:"Orange",
        dress2:"yellow"
    },
    {
        team:"U Mumba",
        captain:"Sunil",
        dress1:"Red",
        dress2:"black"
    },
    {
        team:"Dabang Delhi",
        captain:"Aashu Malik",
        dress1:"Purple",
        dress2:"gold"
    },
    {
        team:"UP Yodhda",
        captain:"Gagan Ghoda",
        dress1:"cyan",
        dress2:"red"
    },
    {
        team:"Patna Pirates",
        captain:"Anikt Janglaan",
        dress1:"lightgreen",
        dress2:"green"
    },
]


button.addEventListener("click",function(){
    let winner=Math.floor(Math.random()*arr.length);
    main.style.backgroundColor=`${arr[winner].dress1}`;
    color_div.style.backgroundColor=`${arr[winner].dress2}`;
     h1.innerHTML=`${arr[winner].team}`;
      h2.innerHTML=`${arr[winner].captain}`;
});
// console.log(arr[winner].team);
// console.log(arr[winner].captain);
// console.log(arr[winner].dress1);
// console.log(arr[winner].dress2);
