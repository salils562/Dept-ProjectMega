let answer1={
    noun: ['name','salil','instructor.','teaching,','hosting','vlogging','writing,','writer'],
    pronoun:['i','it','you.'],
    preposition: ['as','in','to','from'],
    conjuncion: ['and','but'],
    verb: ['is','work','do','may','excel','am','is','meet','am'],
    adverb:['also','not','aside'],
    adjective: ['an','english','online','too.','nice','my'],
    interjection: ['hi!']
}
let audio=new Audio('music/popsound.mp3');
let cont = document.getElementById('con');
let para = "Hi! my name is Salil and I work as an English instructor. Aside from teaching, I also do hosting and vlogging I may not excel in writing, but I am an online writer too. It is nice to meet you.";
let submitButton=document.getElementById('btn');
let text = "";
let score=document.getElementById('grade');
let outof=document.getElementById('outof');
let outt=0;
for (let i = 0; i < para.length; i++) {
    if (para[i] === ' ') {
        cont.innerHTML += `<p class="words" draggable="true">${text}</p> `;
        text = "";
        outt+=1;
    }
    else {
        text += para[i];
    }
}
cont.innerHTML+=`<p class="words" draggable="true">${text}</p> `;
outt+=1;
outof.innerText=outt;
let worditems=document.getElementsByClassName('words');
let appendd;
Array.from(worditems).forEach((element)=>{
element.addEventListener('dragstart',(e)=>{
e.target.className+=" alignborder";
appendd=element;
setTimeout(()=>{
e.target.className="fadeout";
},0);
});
element.addEventListener('dragend',(e)=>{
e.target.className="words";
});
});
let containeritems=document.getElementsByClassName('items'); 
Array.from(containeritems).forEach((element)=>{
element.addEventListener('dragover',(e)=>{
e.preventDefault();    
element.classList.add('dragoverColor');
});
element.addEventListener('dragleave',()=>{
element.classList.remove('dragoverColor');
});
element.addEventListener('drop',(e)=>{
e.preventDefault();    
element.classList.remove('dragoverColor');
element.append(appendd);
audio.play();
});
});
submitButton.addEventListener('click',()=>{
 let totScore=0;   
 let ansItems=document.getElementsByClassName('items');
 let j=0;
 for(let key in answer1){
    for(let i=0;i<(ansItems[j].childElementCount);i++){
        if(answer1[key].includes(((ansItems[j].children[i]).innerText).toLowerCase())){
          ansItems[j].children[i].style.backgroundColor='green';
          totScore+=1;
        }
        else{
            ansItems[j].children[i].style.backgroundColor='red';
        }
    }
    j++;
}
score.innerText=totScore;
});
