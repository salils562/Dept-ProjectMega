let correct=new Audio('music/correct.mp3');
let wrong=new Audio('music/wrong.mp3');
questions = {
    question1: "<div class='blanks'></div> , we managed to reach the top of Mt.Everest.",
    question2: "This room is not big <div class='blanks'></div> for both of us to study.",
    question3: "The baby laughed at my joke <div class='blanks'></div> .",
    question4: "Maria <div class='blanks'></div> answered the police officer's questions and was declared innocent.",
    question5: "She was <div class='blanks'></div> indulged in this affair.",
    question6: "The years rolled by <div class='blanks'></div> .",
    question7: "Your theorems are <div class='blanks'></div> correct.",
    question8: "The mother <div class='blanks'></div> laid the baby on the bed.",
    question9: "They are <div class='blanks'></div> very friendly.",
    question10: "Sudha is a good dancer. She dances really <div class='blanks'></div> .",
    question11: "I don't know why she behaves so <div class='blanks'></div> sometimes.",
    question12: "The car is <div class='blanks'></div> affordable.",
    question13: "We <div class='blanks'></div> go to sleep by 9 PM.",
    question14: "I stumbled and injured myself <div class='blanks'></div> .",
    question15: "It is <div class='blanks'></div> impossible to find where he lives.",
    question16: "His essay is <div class='blanks'></div> done.",
    question17: "Did this child start to communicate <div class='blanks'></div> at the age of nine?",
    question18: "The thieves came in <div class='blanks'></div> .",
    question19: "I <div class='blanks'></div> play badminton with my sister.",
    question20: "It is good to exercise <div class='blanks'></div> .",
    question21: "The boss looked at him <div class='blanks'></div> .",
    question22: "The situation is <div class='blanks'></div> better this week.",
    question23: "I am <div class='blanks'></div> late for work.",
    question24: "The old woman was shivering <div class='blanks'></div> .",
    question25: "Shira sang the Christmas Carols <div class='blanks'></div> .",
    question26: "The gift burnt as Ravi kept it very <div class='blanks'></div> .",
    question27: "We need to fix the issue <div class='blanks'></div> .",
    question28: "She shouted his name <div class='blanks'></div> .",
    question29: "She speaks <div class='blanks'></div> with the dignitaries.",
    question30: "Be careful! This door opens <div class='blanks'></div> .",
    question31: "She picked up the knife <div class='blanks'></div> and used it to save her life.",
    question32: "He grabbed her arm <div class='blanks'></div> and she started crying.",
    question33: "She is in love with him <div class='blanks'></div> .",
    question34: "She <div class='blanks'></div> slammed the door.",
    question35: "The town grew <div class='blanks'></div> after 1997.",
    question36: "India celebrated the performance of CWG'22 players <div class='blanks'></div> .",
    question37: "He waited <div class='blanks'></div>  for the doctor to arrive.",
    question38: "The war between Ukraine and Russia has made people suffer a lot, <div class='blanks'></div> it ends soon."
};
let options = {
    option1:['luckily', 'probably', 'unfortunately'],
    option2:['enough', 'so', 'at all'],
    option3:['strongly', 'heartily', 'usefully'],
    option4:['truthfully', 'honest', 'hardly'],
    option5:['selfish', 'bad','seriously'],
    option6:['hurried', 'fastly', 'quickly'],
    option7:['absolute', 'serious', 'absolutely'],
    option8:['hardly', 'gently', 'frankly'],
    option9:['just', 'always', 'yet'],
    option10:['well', 'best', 'good'],
    option11:['strangely', 'bad', 'worse'],
    option12:['reasonable', 'quietly', 'reasonably'],
    option13:['regular', 'usual', 'generally'],
    option14:['hard', 'late', 'badly'],
    option15:['rare', 'practically', 'scarce'],
    option16:['complete', 'halfly', 'fully'],
    option17:['action', 'verbally', 'intention'],
    option18:['smart', 'stealthily', 'quitely'],
    option19:['soon', 'often', 'today'],
    option20:['quickly', 'regularly', 'heavily'],
    option21:['astonishing', 'unhappy', 'angrily'],
    option22:['too', 'much', 'more'],
    option23:['rarely', 'slowly', 'hard'],
    option24:['slowly', 'happily', 'terribly'],
    option25:['merrily', 'sadly', 'joyous'],
    option26:['carefully', 'carelessly', 'smartly'],
    option27:['quickly', 'happily', 'fastly'],
    option28:['loudly', 'happy','mad'],
    option29:['harshly', 'sweet', 'sweetly'],
    option30:['mostly', 'frequently', 'usual'],
    option31:['hurriedly', 'fastly', 'faster'],
    option32:['slowly', 'roughly', 'quickly'],
    option33:['madly', 'newly', 'mad'],
    option34:['slowly', 'angry', 'angrily'],
    option35:['rapidly', 'real quick', 'quicky'],
    option36:['loudly', 'joyously', 'enviously'],
    option37:['desperately', 'timely', 'patiently'],
    option38:['usually', 'mostly', 'hopefully'],
};
function check(element,word,num){
let xhr=new XMLHttpRequest();
xhr.open('GET','ans.JSON',true);
xhr.onload=function(){
let ans=JSON.parse(this.responseText);
if(ans[num-1]===word){
    element.style.border='2px solid #39da39';
    let telluser=document.getElementsByClassName(num);
    Array.from(telluser).forEach((element)=>{
     element.innerText=`Correct answer !! `;
     element.style.color='#39da39';
     element.classList.add('corr');
    });
    correct.play();
}else{
    element.style.border='2px solid red';
    let telluser=document.getElementsByClassName(num);
    Array.from(telluser).forEach((element)=>{
     element.innerText=`Wrong answer!!`;
     element.classList.add('telluser');
     let telltext=document.createTextNode(`ANSWER: ${ans[num-1]}`)
     let p=document.createElement('p');
     p.style.color='#39da39';
     p.appendChild(telltext);
     element.appendChild(p);
    });
    wrong.play();
}
}
xhr.send(null);
}
let appendQuestion = document.getElementById('questions');
let qNum=1;
for (let key in questions) {
    text = `${qNum}) ${questions[`${key}`]}`;
    let element = document.createElement('div');
    let element2=document.createElement('div');
    let spanElement=document.createElement('div');
    spanElement.className=`${qNum}`;
    let para=document.createElement('p');
    para.id=`${qNum}`;
    para.innerHTML=text;
    element.className = "items";
    element2.className="items-option";
    element.appendChild(para);
    element.appendChild(element2);
    appendQuestion.append(element);
    appendQuestion.append(spanElement);
    qNum++;
}
let appendOptions=document.getElementsByClassName('items-option');
let arrOptions=Array.from(appendOptions);
let i=0;
for(let key in options){
    let option=`<span class='words' draggable='true'>${options[`${key}`][0]}</span><span class='words' draggable='true'>${options[`${key}`][1]}</span><span class='words' draggable='true'>${options[`${key}`][2]}</span>`;
    arrOptions[i].innerHTML=option;
    i++;
}

// drag drop
let words=document.getElementsByClassName('words');
let appendd;
Array.from(words).forEach((element)=>{
element.addEventListener('dragstart',(e)=>{   
appendd=element;        
setTimeout(()=>{
e.target.className='fadeout';
},0);
});
element.addEventListener('dragend',(e)=>{    
e.target.className='words';
});
});

let blanks=document.getElementsByClassName('blanks');
Array.from(blanks).forEach((element)=>{
element.addEventListener('dragover',(e)=>{
e.preventDefault();
});
element.addEventListener('dragleave',()=>{

});
element.addEventListener('drop',(e)=>{
    e.preventDefault();    
    if(element.hasChildNodes()<1){
        element.append(appendd);
        check(element,element.children[0].innerText,element.parentElement.id);
    }
});
});

document.getElementById('reset').addEventListener('click',()=>{
location.reload();
});