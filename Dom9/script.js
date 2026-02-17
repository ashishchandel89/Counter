let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let b7 = document.getElementById('b7');
let b8 = document.getElementById('b8');
let b9 = document.getElementById('b9');
let b10 = document.getElementById('b10');
let b11 = document.getElementById('b11');
let b12 = document.getElementById('b12');
let b13= document.getElementById('b13');
let b14= document.getElementById('b14');
let b15= document.getElementById('b15');
let b16 = document.getElementById('b16');
let body=document.querySelector('body');

const buttons = [
    {el: b1, audio: '28.mp3' ,no:1},
    {el: b2, audio: '29.mp3' ,no:2},
    {el: b3, audio: '30.mp3' ,no:3},
    {el: b4, audio: '31.mp3' ,no:4},
    {el: b5, audio: '32.mp3' ,no:5},
    {el: b6, audio: '33.mp3' ,no:6},
    {el: b7, audio: '34.mp3' ,no:7},
    {el: b8, audio: '35.mp3' ,no:8},
    {el: b9, audio: '36.mp3' ,no:9},
    {el: b10, audio: '37.mp3' ,no:10},
    {el: b11, audio: '38.mp3' ,no:11},
    {el: b12, audio: '39.mp3' ,no:12},
    {el: b13, audio: '40.mp3' ,no:13},
    {el: b14, audio: '41.mp3' ,no:14},
    {el: b15, audio: '42.mp3' ,no:15}
];


buttons.forEach(function(val){
    let ele=val.el;
    let aud=new Audio(val.audio);


   
    ele.addEventListener('click',function(){
        aud.currentTime = 0; 
        aud.play();
    });
    
});
    
      