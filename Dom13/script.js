let para=document.querySelector("p");
const char="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text=para.innerText;

para.addEventListener('mouseenter',function(){
    setInterval(function(){
        const str=text.split('').map(function(ch,idx){
            return char.split('')[Math.floor(Math.random()*53)];
        }).join('');
        para.innerText=str;
        },30); 
    });