let arraywords=document.getElementsByClassName('innerArray');
let correctBuzzer=new Audio('music//correctBuzzer.mp3');
let wrongBuzzer=new Audio('music//wrongBuzzer.mp3');
let chooseOne=[
    ['unpleasant','nice','horrible'],
    ['unreliable','good','true'],
    ['selfish','generous','greedy'],
    ['torpid','slothful','hard-working']
];
let scorecount=0;
let correct=['nice','unreliable','generous','hard-working'];
let options=document.getElementById('option');
let answer=document.getElementById('answer');
let submitButton=document.getElementById('submit');
let score=document.getElementById('score');
Array.from(arraywords).forEach((element,index)=>{    
element.addEventListener('click',()=>{
element.style.backgroundColor='blue';
element.style.color='white';
element.classList.add('afterchoose');
document.getElementById('correct').innerText=element.innerText;
for(let i=0;i<3;i++){
    options.children[i].innerText=chooseOne[index][i];
}
document.getElementById('ask').style.visibility='visible';
document.getElementById('asking').src='images//askingI.jpg'
document.getElementById('asking').style.height='200px';
document.getElementById('asking').style.width='250px';
});
});
submitButton.addEventListener('click',()=>{
if(correct.includes((answer.value).toLowerCase())){
    for(let i=0;i<correct.length;i++){
        if(correct[i]===answer.value){
            arraywords[i].innerText=answer.value;
            arraywords[i].style.backgroundColor='green';
        }
    }
    let askingimg=document.getElementById('asking');
    askingimg.src='images//menher-congrats.gif';
    answer.value="";
    submitButton.className='btn btn-success btn-sm';
    scorecount+=1;
    score.innerText=scorecount;
    correctBuzzer.play();
}
else{
    let askingimg=document.getElementById('asking');
    askingimg.src='images//menher-no.gif';
    answer.value="";
    submitButton.className='btn btn-success btn-sm';
    wrongBuzzer.play();
}
});
document.getElementById('reset').addEventListener('click',()=>{
location.reload();
});
