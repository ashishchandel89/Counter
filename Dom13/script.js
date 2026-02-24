let para=document.querySelector("p");
const char="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text=para.innerText;

let iteration=0;
para.addEventListener('mouseenter',function(){
        function randomText(){
            
        const str=text.split('').map(function(ch,idx){
            if(iteration>idx){
                return ch;
            }
            return char.split('')[Math.floor(Math.random()*53)];
        }).join('');
        para.innerText=str;
        iteration+=0.25;
    }
    setInterval(function(){
        randomText();
    },9.9)
        
    });