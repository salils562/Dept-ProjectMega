let greet="Welcome To The Humanities Department Of UIT-RGPV, Bhopal(M.P)";
let setter=document.getElementById('greet');
let i=0;
let text="";
setInterval(()=>{
if(i<greet.length){    
text=text+greet[i];    
setter.children[0].innerText=text;
i+=1;
}
else if((greet.length+20)===i){
    i=0;
    text="";
}
else if((i+20)>greet.length){
    i++;  
}

},100);