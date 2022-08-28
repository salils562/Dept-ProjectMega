// setting variables
let questions = {
    question1: "She worked <span class='blanks'>______</span> and passed the examination.",
    question2: "We <span class='blanks'>______</span> see a lion.",
    question3: "He narrated the incident in <span class='blanks'>______</span>.",
    question4: "He often comes <span class='blanks'>______</span> to school.",
    question5: "I really feel <span class='blanks'>______</span> about it.",
    question6: "He is <span class='blanks'>______</span> rich.",
    question7: "The journey was <span class='blanks'>______</span> uncomfortable.",
    question8: "The lecture was <span class='blanks'>______</span> boring.",
    question9: "Hardly <span class='blanks'>______</span> had any rest for weeks.",
    question10: "He is getting <span class='blanks'>______</span> day by day.",
    question11:"The town grew <span class='blanks'>______</span> after 1997.", 
    question12:"He waited <span class='blanks'>______</span> for his mother to arrive." ,
    question13:"He gave us the money <span class='blanks'>______</span>.",
    question14:"He <span class='blanks'>______</span>ate the chocolate cake.",
    question15:"I thought the movie ended <span class='blanks'>______</span>.",
    question16:"The <span class='blanks'>______</span> painted landscape is a wonderful addition to my living room decor",
    question17:"Grandma's crystal vase is a priceless antique that must be handled <span class='blanks'>______</span>",
    question18:"The sun shone <span class='blanks'>______</span>.",
    question19:"The teacher spoke <span class='blanks'>______</span> to me.",
    question20:"He can run <span class='blanks'>______</span> better than I do.",
    question21:"She entered the room <span class='blanks'>______</span>.",
    question22:"Unlike the calm waters of lakes, ocean water keeps moving <span class='blanks'>______</span>."
}
let options = {
    option1: ['hard', 'hardly', 'hardest'],
    option2: ['rarely', 'scarcely', 'hardly'],
    option3: ['details', 'detailed', 'detail'],
    option4: ['late', 'lately', 'lates'],
    option5: ['badely', 'bad', 'worst'],
    option6: ['so', 'very', 'much'],
    option7: ['rather', 'fairly', 'fair'],
    option8: ['fairly', 'rather', 'neither'],
    option9: ['have I', 'I have', 'have'],
    option10: ['well', 'better', 'best'],
    option11:['swiftly','quick', 'quickly'],
    option12:['slowly', 'patiently', 'with patience'],
    option13:['generously', 'kindly', 'kind'],
    option14:['greedy', 'greedily', 'greed'],
    option15:['abrupt', 'abruptly', 'hardly'],
    option16:['wonder', 'beautifully', 'abruptly'],
    option17:['delicately', 'carelessly', 'tightly'],
    option18:['lightly','brightly','heavily'],
    option19:['kindly', 'eagerly', 'generously'],
    option20:['more','far','too'],
    option21:['quiet', 'quietly', 'delicately'],
    option22:['patiently', 'continuously', 'tightly'],
}
let answers = ['hard', 'rarely', 'detail', 'late', 'bad', 'very', 'rather', 'rather', 'have I', 'better','quickly','patiently','generously','greedily','abruptly','beautifully','delicately','brightly','kindly','far','quietly','continuously'];
let blanks = document.getElementsByClassName('blanks');
let AppendQuestion = document.getElementById('question');
let nextButton = document.getElementById('next-question');
let previousButton = document.getElementById('previous-question');
let reset=document.getElementById('reset');
let Alert=document.getElementById('showAlert');
let ballons = document.getElementsByClassName('ballons-items');
let gunman = document.querySelector('.gunman');
let gunShot = new Audio('music/gunShot.mp3');
let cheer = new Audio('music/cheer.mp3');
let girl = document.getElementById('girl');
// setting variable default values
let qIter = 1;
AppendQuestion.innerHTML=`<p>${qIter}) ${questions[`question${qIter}`]}</p>`;
previousButton.disabled = true;
Array.from(ballons).forEach((element, index) => {
    element.children[0].innerText = options[`option${qIter}`][index];
});
// defining functions
function NextQuestion() {
    if (qIter < Object.keys(questions).length) {
        qIter++;
        AppendQuestion.innerHTML=`<p>${qIter}) ${questions[`question${qIter}`]}</p>`;
        setBallons();
        previousButton.disabled = false;
    }
    else {
        nextButton.disabled = true;
    }
}

function PreviousQuestion() {
    if (qIter > 1) {
        qIter--;
        AppendQuestion.innerHTML=`<p>${qIter}) ${questions[`question${qIter}`]}</p>`;
        setBallons();
        nextButton.disabled = false;
    }
    else {
        previousButton.disabled = true;
    }
}
function setBallons() {
    AppendQuestion.style.backgroundColor='#1a83fbd6';
    girl.src = 'images//asking.gif';
    girl.style.width='20vh';
    girl.style.height='20vh';
    Array.from(ballons).forEach((element, index) => {
        element.style.visibility = 'visible';
        element.children[0].innerText = options[`option${qIter}`][index];
    });
}
// Event Listeners
nextButton.addEventListener('click', () => {
    NextQuestion();
});
previousButton.addEventListener('click', () => {
    PreviousQuestion();
});
reset.addEventListener('click',()=>{
location.reload();
});
Alert.addEventListener('click',()=>{
alert("Click on the balloon with correct text");
});
Array.from(ballons).forEach((element, index) => {
    element.addEventListener('click', () => {
        gunShot.play();
        if ((element.children[0].innerText) === answers[qIter - 1]) {
            blanks[0].innerText = answers[qIter - 1];
            blanks[0].style.fontWeight = 'bold';
            AppendQuestion.style.backgroundColor = '#21f43de7';
            ballons[index].style.visibility = 'hidden';
            cheer.play();
            girl.src = 'images//happygirl.gif';
            girl.style.width = '20vh';
            girl.style.height = '20vh';
        }
        else {
            blanks[0].innerText = element.children[0].innerText;
            blanks[0].style.fontWeight = 'bold';
            AppendQuestion.style.backgroundColor = 'red';
            ballons[index].style.visibility = 'hidden';
            girl.src = 'images//crying.gif';
            girl.style.width = '20vh';
            girl.style.height = '20vh';
            setTimeout(() => {
                girl.style.width = '0vh';
                girl.style.height = '0vh';
            }, 2000);
        }
        gunman.classList.add('animate-gunman');
        setTimeout(() => {
            gunman.classList.remove('animate-gunman');
        }, 800);
    });
});