let setId=1;
let fetchOption=(element)=>{
    let xhr=new XMLHttpRequest();
    xhr.open('GET','json/options.json',true);
    xhr.onload=function(){
       let i=element.id;  
       let option=(JSON.parse(this.responseText))[`option${i}`]; 
       let options=document.getElementById('option');
       options.children[0].innerText=option[0];
       options.children[1].innerText=option[1];
       options.children[2].innerText=option[2];
    }
    xhr.send(null);
   };
function getInput(){    
let input=document.getElementsByClassName('user-input');
let imageAsking=document.getElementById('asking');
Array.from(input).forEach((element)=>{
element.addEventListener('click',()=>{
    fetchOption(element);
    document.getElementById('ask').style.visibility='visible';
    imageAsking.src='images/asking.png';
    imageAsking.style.width='200px';
    imageAsking.style.height='200px';
});
element.addEventListener('blur',()=>{
let xhr=new XMLHttpRequest();
xhr.open('GET','json/answer.json',true);
xhr.onload=function(){    
let checkfor=parseInt(element.id);
let ans=(JSON.parse(this.responseText))[checkfor-1];
if((ans).toLowerCase()===(element.value).toLowerCase()){
    element.style.border='2px solid #4bde4b';
    document.getElementById('asking').src='images/menher-congrats.gif';
}else{
    element.style.border='2px solid red';
    document.getElementById('asking').src='images/menher-no.gif';
}
}
xhr.send(null);
});
});
}

let iter=1;
let next=document.getElementById('next');
function appendQuestions(){
    let xhr=new XMLHttpRequest();
    xhr.open('GET','json/questions.json',true);
    xhr.onload=function (){
     let questions=document.getElementById('questions');
     questions.innerHTML="";
     let ques=JSON.parse(this.responseText);
     for(let i=1;i<=5;i++){
         if(iter<=Object.keys(ques).length){
                 questions.innerHTML+=`<p>${iter}) ${ques[`question${iter}`]}</p>`;
                 iter++;
                }else{
                    questions.innerHTML=`<p>Thanks for playing</p>`;
                    next.disabled=true;
                }
            }
            let inputId=document.getElementsByClassName('user-input');
            Array.from(inputId).forEach((element)=>{
             element.id=`${setId}`;
             setId++;
            });
            getInput();
        }
        xhr.send(null);
    }

appendQuestions();
// event listeners
next.addEventListener('click',()=>{
appendQuestions();
let imageAsking=document.getElementById('asking');
document.getElementById('ask').style.visibility='hidden';
imageAsking.style.height='0px';
imageAsking.style.width='0px';
});

