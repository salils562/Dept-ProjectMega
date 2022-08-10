// Declaring variables
let dancingImage = document.getElementById('image');
let blocks = document.getElementsByClassName('blocks');
let middleElement = document.getElementsByClassName('item-5');
let correctBuzzer=new Audio('music//correctBuzzer.mp3');
let soundopo=new Audio('music//oppos.mp3');
let soundsimi=new Audio('music//similarmode.mp3');
let count = 0;
let count2 = 0;
let presentKey;
let opposite = {
    rude: ['nice', 'polite'],
    honest: ['dis-honest', 'biased'],
    nasty: ['nice', 'aggreable'],
    lazy: ['active', 'hard-working'],
    stupid: ['intelligent', 'clever'],
    reliable: ['un-reliable', 'untrustworthy'],
    talkative: ['quiet', 'silent'],
    kind: ['cruel', 'un-kind'],
    "un-friendly": ['friendly', 'favorable']
}
let similar = {
    rude: ['ungracious', 'impolite'],
    honest: ['fair', 'genunie'],
    nasty: ['unpleasant', 'rude'],
    lazy: ['indolent', 'in-active'],
    stupid: ['fool', 'dumb'],
    reliable: ['valid', 'dodgy'],
    talkative: ['garrulous', 'chatty'],
    kind: ['loving', 'gentle'],
    "un-friendly": ['combative', 'hostile']
}
let select = {};
let oppositeButton = document.getElementById('opposite-mode');
let similarButton = document.getElementById('similar-mode');

// Event listeners
oppositeButton.addEventListener('click', () => {
    select = opposite;
    count=0;
    document.getElementById('ask-user').innerText = 'opposite mode set';
    similarButton.className = 'btn btn-primary mx-4 my-2';
    oppositeButton.className = 'btn btn-success mx-4 my-2';
    soundopo.play();
    ResetColors();
    Array.from(blocks).forEach((element) => {
        element.addEventListener('click', () => {
            for (let keys in select) {
                if (select[keys].includes((element.innerText).toLowerCase())) {
                    element.style.backgroundColor = 'green';
                    element.style.color = 'white';
                    count += 1;
                    presentKey = keys;
                    checkCountOpposite();
                    break;
                }
                else if (element.innerText === "") {
                    continue;
                }
                else {
                    element.style.backgroundColor = 'red';
                    element.style.color = 'white';
                }
            }
        });
    });
});


similarButton.addEventListener('click', () => {
    select = similar;
    count2=0;
    document.getElementById('ask-user').innerText = 'similar mode set';
    oppositeButton.className = 'btn btn-primary mx-4 my-2';
    similarButton.className = 'btn btn-success mx-4 my-2';
    soundsimi.play();
    ResetColors();
    Array.from(blocks).forEach((element) => {
        element.addEventListener('click', () => {
            for (let keys in select) {
                if (select[keys].includes((element.innerText).toLowerCase())) {
                    element.style.backgroundColor = 'green';
                    element.style.color = 'white';
                    count2 += 1;
                    presentKey = keys;
                    checkCountSimilar();
                    break;
                }
                else if (element.innerText === "") {
                    continue;
                }
                else {
                    element.style.backgroundColor = 'red';
                    element.style.color = 'white';
                }
            }
        });
    });
});

function ResetColors() {
    count = 0;
    count2 = 0;
    Array.from(blocks).forEach((element) => {
        element.style.backgroundColor='rgb(201, 215, 215)';
        element.style.color='black';
    });
}
// Count check functions
function checkCountOpposite() {
    Array.from(middleElement).forEach((element) => {
        if (count === 2 && (presentKey === (element.innerText).toLowerCase())) {
            count = 0;
            correctBuzzer.play();
            dancingImage.style.width='150px';
            dancingImage.style.height='150px';
            setTimeout(() => {
                dancingImage.style.width='0px';
                dancingImage.style.height='0px';
            }, 3000);
        }
    });

}
function checkCountSimilar() {
    Array.from(middleElement).forEach((element) => {
        if (count2 === 2 && (presentKey === (element.innerText).toLowerCase())) {
            count2 = 0;
            correctBuzzer.play();
            dancingImage.style.width='150px';
            dancingImage.style.height='150px';
            setTimeout(() => {
                dancingImage.style.width='0px';
                dancingImage.style.height='0px';
            }, 3000);
        }
    });
}
