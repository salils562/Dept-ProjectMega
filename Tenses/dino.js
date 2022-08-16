// Audio
let correct = new Audio('music//correct.mp3');
let wrong = new Audio('music//wrong.mp3');
let dino = document.getElementById('dino');
let obstacle = document.getElementById('obstacle');
let questionCont = document.querySelector('.questions');
let nextIter = document.getElementById('next');
let reset = document.getElementById('reset');
let start = document.getElementById('start');
let score=document.getElementById('score');
let scoreReal=0;
let questions = {
    question1: "<p>When I opened my eyes, I <span id='1'>______</span> a strange sight.</p>",
    question2: "<p>Every morning she <span id='2'>_____</span> up early and gets ready for work.</p>",
    question3: "<p>If I knew what he wanted, I <span id='3'>______</span> this.</p>",
    question4: "<p>I <span id='4'>____</span> anything from her in a long time.</p>",
    question5: "<p>The headmaster <span id='5'>____</span> to talk to you.</p>",
    question6: "<p>Jane <span id='6'>____</span> with her parents.</p>",
    question7: "<p>We <span id='7'>____</span> Greece next month.</p>",
    question8: "<p>The moon <span id='8'>____</span> around the earth.</p>",
    question9: "<p>She <span id='9'>____</span> a novel.</p>",
    question10: "<p>All students <span id='10'>____</span> in their work.</p>",
};
let options = {
    option1: ['saw', 'sawed', 'sawn'],
    option2: ['woke', 'waking', 'wakes'],
    option3: ['should not permit', 'would not permit', 'could not permit'],
    option4: ["haven't heard", "have heard", 'would heard'],
    option5: ['wanted', 'wants', 'wanting'],
    option6: ['lived', 'lives', 'living'],
    option7: ['visiting', 'were visiting', 'are visiting'],
    option8: ['revolves', 'revolving', 'revolved'],
    option9: ['had written', 'has written', 'will write'],
    option10: ['has handed', 'handed', 'have handed'],
};
let answers = ['saw', 'wakes', 'would not permit', "haven't heard", 'wants', 'lives', 'are visiting', 'revolves', 'has written', 'have handed'];
questionCont.innerHTML = questions['question1'];
let q = 1;
let i = 1;
nextIter.addEventListener('click', () => {
    if (q < 10) {
        q++;
        nextQuestion();
    }
    else {
        questionCont.innerHTML = `Thanks! for playing`;
    }
});

function nextQuestion() {
    questionCont.innerHTML = questions[`question${q}`];
    nextIter.className="btn btn-success btn-sm mx-3";
    setTimeout(()=>{
     nextIter.className="btn btn-primary btn-sm mx-3";
    },3000);
};
reset.addEventListener('click', () => {
    location.reload();
});
let stopOption=false;
// start eventhandling
start.addEventListener('click', () => {
    allow();
    stopOption=false;
    obstacle.children[0].style.backgroundColor = null;
    obstacle.children[0].innerText = options[`option${q}`][0];
    obstacle.classList.add('animate-obstacle');
    i = 1;
    start.className = "btn btn-success btn-sm";
    start.disabled = true;
    let interval = setInterval(() => {
        if (i < 3) {
            obstacle.children[0].innerText = options[`option${q}`][i];
            i++;
        }
        else if(stopOption){
            clearInterval(interval);
        }
        else {
           i=0;
        }
    }, 4000);
});
// Dino controls
document.onkeydown = function (e) {
    if (e.key === 'ArrowUp') {
        dino.classList.add('animate-dino');
        setTimeout(() => {
            dino.classList.remove('animate-dino');
        }, 1000);
    }
    else if (e.key === 'ArrowRight') {
        let moveRight = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = moveRight + 55 + 'px';
    }
    else if (e.key === 'ArrowLeft') {
        let moveLeft = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = moveLeft - 55 + 'px';
    }
}
// Cheaking hit of obstacle and dino
function allow(){
let cheaker=setInterval(() => {
    let dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    let dinoy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('bottom'));
    let obstaclex = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    let obstacley = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('bottom'));
    let diffX = Math.abs(obstaclex - dinox);
    let diffY = Math.abs(dinoy - obstacley);
    if (diffX < 55 && diffY < 40) {
        if (answers.includes((obstacle.children[0].innerText))) {
            let getsnap = document.getElementById(`${q}`);
            getsnap.innerHTML = obstacle.children[0].innerText;
            getsnap.style.backgroundColor = 'green';
            obstacle.classList.remove('animate-obstacle');
            stopOption=true;
            i=4;
            scoreReal+=1;
            score.innerText=scoreReal;
            correct.play();
            clearInterval(cheaker)
            setTimeout(()=>{
                start.disabled = false;
                start.className = "btn btn-primary btn-sm";
            },2000);
        }
        else {
            obstacle.classList.remove('animate-obstacle');
            obstacle.children[0].style.backgroundColor = 'red';
            obstacle.classList.remove('animate-obstacle');
            i=4;
            stopOption=true;
            wrong.play();
            clearInterval(cheaker);
            setTimeout(()=>{
                start.disabled = false;
                start.className = "btn btn-primary btn-sm";
            },2000);
        }
    }
}, 100);
}
// mobile controls
let controlKeys=document.getElementsByClassName('control-keys');
Array.from(controlKeys).forEach((element)=>{
element.addEventListener('click',()=>{
if(element.id==='up'){
    dino.classList.add('animate-dino-mobile');
    setTimeout(() => {
        dino.classList.remove('animate-dino-mobile');
    }, 1000);
}
else if(element.id==='left'){
    let moveLeft = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left = moveLeft - 40 + 'px';
}
else if(element.id==='right'){
    let moveRight = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left = moveRight + 40 + 'px';
}
});
});