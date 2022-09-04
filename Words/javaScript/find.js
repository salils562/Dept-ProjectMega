let correctBuzzer=new Audio('music/correctBuzzer.mp3');
let wrongBuzzer=new Audio('music/wrongBuzzer.mp3');
let questions=document.getElementById('questions');
let nextButton=document.getElementById('next');
let options=document.getElementById('option');
let answer=document.getElementById('answer');
let submit=document.getElementById('submit');
let score=document.getElementById('score');
let scorecount=0;
let iter=1;
let globalid=0;
let attactOption=(id)=>{
let xhr=new XMLHttpRequest();
xhr.open('GET','javaScript/json/questions.json',true);
xhr.onload=function(){
let option=(JSON.parse(this.responseText))[`question${id}`][`option`];
for(let i=0;i<3;i++){
    options.children[i].innerHTML=`${option[i]}`;
}
}
xhr.send(null);
}
let attactEvent=()=>{
let innerArray=document.getElementsByClassName("innerArray");
Array.from(innerArray).forEach((element)=>{
element.addEventListener('click',()=>{
    globalid=element.id;
    element.style.backgroundColor='blue';
    element.style.color='white';
    element.classList.add('afterchoose');
    document.getElementById('correct').innerText=element.innerText;
    attactOption(element.id); 
    document.getElementById('ask').style.visibility='visible';
    document.getElementById('asking').src='images//askingI.jpg'
    document.getElementById('asking').style.height='200px';
    document.getElementById('asking').style.width='250px';

});
});
}
let AppendQuestion=()=>{
    questions.innerHTML="";
    let xhr=new XMLHttpRequest();
    xhr.open('GET','javaScript/json/questions.json',true);
    xhr.onload=function(){
        if(Object.keys((JSON.parse(this.responseText))).length>iter){
            try{
                for(let i=1;i<=5;i++){
                    let data=(JSON.parse(this.responseText))[`question${iter}`]["ques"];
                    let p=document.createElement('p');
                    p.innerHTML=`${iter}) `;
                    p.innerHTML+=data;
                    questions.appendChild(p);
                    questions.children[i-1].children[0].id=`${iter}`;
                    iter++;
                }
            }
            catch(e){
               console.log("questions are over");
            }
        attactEvent();    
        }else{
            questions.innerHTML="Thanks for playing";
        }
    }
    xhr.send(null);
}
AppendQuestion();
nextButton.addEventListener('click',()=>{    
AppendQuestion();
});

submit.addEventListener('click',()=>{
let xhr=new XMLHttpRequest();
xhr.open('GET','javaScript/json/questions.json',true);
xhr.onload=function(){
let ans=(JSON.parse(this.responseText))[`question${globalid}`][`answer`];
let input=answer.value;
if(ans.toLowerCase()===input.toLowerCase()){
    document.getElementById(globalid).innerText=ans;
    document.getElementById(globalid).style.backgroundColor='green';
    let askingimg=document.getElementById('asking');
    askingimg.src='images//menher-congrats.gif';
    answer.value="";
    submit.className='btn btn-success btn-sm mt-2';
    scorecount+=1;
    score.innerText=scorecount;
    correctBuzzer.play();
}else{
    let askingimg=document.getElementById('asking');
    askingimg.src='images//menher-no.gif';
    answer.value="";
    submit.className='btn btn-success btn-sm mt-2 mx-2';
    wrongBuzzer.play();
}
}
xhr.send(null);
});

document.getElementById('reset').addEventListener('click',()=>{
location.reload();
});