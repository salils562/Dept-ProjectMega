// defining variables
let questions = {
    question1: "Can't you see the table is too dirty and you are putting food on it? There might be something poisonous on that. Go and bring some water and clean it carefully.",
    question2: 'There were many people in the garden praying for the old woman who was shivering terribly due to illness. "Oh god! Help this poor woman", I said.',
    question3: "The Crash Landing is a Korean drama. This story is about a North Korean charming girl who accidentally landed in South-Korea while paragliding where she met an army man and fell in love with him.",
    question4: "The minister visited the town so that he may better understand the needs of the troubled townsfolk and decide upon the necessary reforms.",
    question5: "Great! Meera and her friend are the only brilliant girls with the highest score in class even though their parents are poor.",
    question6: "Wow! Rajat and his girlfriend are merrily enjoying their first date in London. They both seem like they are made for each other.",
    question7: "Wow! What an adorable gift Rosy received. However, she carelessly placed it near a candle. The flames may burn that beautiful gift.",
    question8: "The young girl brought a very long letter from the teacher and then she quickly disappeared. <p class='words' draggable='true'>Oh my god!</p> Was she an angel or goddess? Whoever she was, I am safe because of her.",
    question9: "Wow! Harry and Meghan really surprised the queen with their sudden decision. Their decision was both in favor of the queen <p class='words' draggable='true'>as well as</p> society.",
    question10: "My friend Mark was born in a small town in northern Canada called Dooly. Mark grew up as a happy and intelligent boy. He was a good student in school who studied carefully for all his exams and got very good grades.",
    question11: "Wow! Rene is such a beautiful girl. If I am not wrong she is your sister who works in NewYork. She is a skilled dancer as well as a gymnast. She has been dancing for the past eight years.",
    question12: "Ah! It was an interesting movie and people rushed fast to book tickets. However, a few tickets were left <p class='words' draggable='true'>that's why</p> many people left the movie hall abruptly.",
    question13: "Ah! My husband and I wish we could travel yearly to Europe. However, visiting Europe is too expensive, I wish we could afford that.",
    question14: "Egads! The teacher assigns us <p class='words' draggable='true'>so much</p> homework daily. She expects it on her desk by eight the next morning. She is extremely brutal.",
    question15: "Damn! I wish I had done my homework, but with two hours left until the deadline, I let some stranger on the Internet do it instead.",
    question16: "He ran quickly after the red bus and caught it but suddenly the ticket checker came and found him without a ticket. He was heavily fined.",
    question17: "Hurrah! India has won <p class='words' draggable='true'>so many</p> medals in the Common-Wealth Games, <p class='words' draggable='true'>for which</p> the players have earned appreciation from the netizens! The entire country is celebrating joyously.",
    question18: "Ahh! The brown fox jumped quickly over the lazy dog and killed it. Well, this is a real-life example of <p class='words' draggable='true'>Charles Darwin's</p> <p class='words' draggable='true'>Survival of the fittest theory.</p>",
    question19: "Wow! You and Tom are really smart to save money in the bank. You may use it for your education in the future.",
    question20: '"Hey! Clare and Serene, I am here.", he called out loudly while jumping off the wooden ladder.',
    question21: "'oi! Watch out' Louisa yelled, waving her skinny arms and jumping fractionally up and down.",
    question22: "The Covid-19 pandemic brought a dynamic shift in the education-system. The imposition of lockdown led to the shutdown of physical classrooms and thus online education became the new norm.",
    question23: "Wow! It's so wonderful how a little busy bee utilizes each shining hour and gathers honey all day from every flower. Also, how skillfully she builds her cell and labours hard to store it well.",
    question24: "There is no happiness in wealth but there is so much wealth in the experience of happiness. I urge you to  stop working simply for wages and start working for love.",
    question25: "An eclipse of the Sun happens when the moon comes between the Earth and the Sun. In a partial eclipse the moon cuts out some of the light from the sun and in a total eclipse, the moon appears to cover the sun completely.",
    question26: "Plants develop physical and chemical methods to protect themselves from being eaten by animals, birds or insects. Their special forms of defence make them a very fascinating to study.",
    question27: "Growing up is fun but it can be extremely challenging as well when you are at a stage where you are trying to figure out who you are, what you are good at, what you would like to do etc.",
    question28: "The Bermuda Triangle has emerged as one of the greatest unexplained mysteries of modern times over the years. There have been countless disappearances of ships,boats, planes and other mysterious happenings in this triangle. Each incident is bizarre and defies explanation.",
    question29: "Advertising is the promotion of goods and services and an opportunity for the companies to sell their products better than their competitors and gain more profit quickly.",
    question30: "Indians are known for their hospitality. They welcome their guest with open arms, for they feel that a guest is a person to be honored and they serve them as God.",
    question31: "As covid-19 spread across the world, mankind has had to close its shutters and reorganized itself in the face of harsh life.  It seems like decades since I last attended school or played outside with my friends.",
    question32: "Martin Luther King Jr. was an American priest who waged a lifelong struggle to bring economic and racial equality peacefully to the black people of the United States of America.",
    question33: "Pearl has fascinated man ever since it was discovered. It is one of the most valuable gems and has been treasured since the earliest human civilization.",
    question34: "Ahh! If by some magical fate, I were to become invisible, I would be extremely happy and make all my dreams come true. Being invisible would give me the liberty to go anywhere and see everything.",
    question35: "To be successful in life one should be in total control of himself. One should remain unmoved both by the ups and downs of life. For he who gets broken by a stroke of bad luck is equally likely to get broken by a run of good luck too.",
    question36: "I love to rise up early on a summer morning when the birds sing on thick banyan trees. Oh! What sweet company to go to school on a summer morning. I walk through the road and sing merrily.",
    question37: "Rich people always complain about taxes. They say the economy would do better if the government taxed them less.",
    question38: "“Is this adorable gown from the New Market”, she asked. “Yes, go there quickly, and grab it”, I replied",
    question39: "Sam met Jody at the station. He was having a green parrot and it spoke as softly as Jody.",
    question40: "When I first heard that all the classes at my school were going online starting from March 13th, my first and only reaction was Wow!",
    question41: "Amazing! Your mother prepared a great meal. She is too fast in cooking and her smile makes food more delicious.",
    question42: "Andrew and Maria thought their jobs were secure after the rancorous argument with the customer, but Alas! Bad news is fast approaching them.",
    question43: "Great! Meera and her friend are the only brilliant girls who scored highest in class. I am very proud of them.",
    question44: "How wonderful! exclaimed George and clapped loudly for her stellar performance.",
    question45: "Wow! Ranbir and Alia have married. They are my favorite and I adore both of them. I wish them a happy life ahead.",
    question46: "Agh! So I left angrily because of several insults. I tried to manage the situation calmly but Kamala provoked me.",
    question47: "“Yeah! The teacher will give a prize to the team that scores the highest.”, said the monitor. We all practiced even more hardly after hearing this.",
    question48: "She sang this melodious song on the radio yesterday. I still can't get over her voice.",
    question49: "It was the last day of the preparation for the exam. John thumbed through the book very rapidly. He learned everything but Alas! He slept during the exam and failed.",
    question50: "Ouch! The red ant bit me. It is paining immensely. Please call the doctor as soon as possible.",
};
let iter = 1;
let container = document.getElementById('con');
let submit = document.getElementById('btn');
let next = document.getElementById('btn2');
let previous = document.getElementById('btn3');
let text = "";
let audio = new Audio('../music/popsound.mp3');
let containeritems = document.getElementsByClassName('items');
let appendd;
// defining functions
function questionEditor() {
    container.innerHTML = `<p>${iter}.)</p>`;
    for (let i = 0; i < (questions[`question${iter}`].length); i++) {
        if (questions[`question${iter}`][i] === '<') {
            while (questions[`question${iter}`][i] != '/') {
                text += questions[`question${iter}`][i];
                i++;
            }
            text += '/p>';
            container.innerHTML += text;
            text = "";
            i += 3;
        }
        else if (questions[`question${iter}`][i] === ' ') {
            container.innerHTML += `<p class="words" draggable="true">${text}</p> `;
            text = "";
        }
        else {
            text += questions[`question${iter}`][i];
        }
    }
    container.innerHTML += `<p class="words" draggable="true">${text}</p> `;
    text = "";
    Array.from(containeritems).forEach((element) => {
        element.innerHTML = "";
    });
}
questionEditor();
// adding event listeners
next.addEventListener('click', () => {
    if (iter < Object.keys(questions).length) {
        iter++;
        container.innerHTML = "";
        questionEditor();
        dragDrop();
        next.disabled = true;
        setTimeout(() => {
            next.disabled = false;
        }, 1000);
        previous.disabled = false;
    } else {
        next.disabled = true;
    }
});
previous.addEventListener('click', () => {
    if (iter > 1) {
        iter--;
        container.innerHTML = "";
        questionEditor();
        dragDrop();
        previous.disabled = true;
        setTimeout(() => {
            previous.disabled = false;
        }, 1000);
        next.disabled = false;
    } else {
        previous.disabled = true;
    }
});
submit.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '../javaScript/json/exercise2.JSON', true);
    xhr.onload = function () {
        let text = JSON.parse(this.responseText);
        let selectAnswer = text[`answer${iter}`];
        let ansItems = document.getElementsByClassName('items');
        let j = 0;
        for (let key in selectAnswer) {
            for (let i = 0; i < (ansItems[j].childElementCount); i++) {
                if (selectAnswer[key].includes(((ansItems[j].children[i]).innerText).toLowerCase())) {
                    ansItems[j].children[i].style.backgroundColor = 'green';
                }
                else {
                    ansItems[j].children[i].style.backgroundColor = 'red';
                }
            }
            j++;
        }
    }
    xhr.send(null);
});
// drag and drop
function dragDrop() {
    let worditems = document.getElementsByClassName('words');
    Array.from(worditems).forEach((element) => {
        element.addEventListener('dragstart', (e) => {
            e.target.className += " alignborder";
            appendd = element;
            setTimeout(() => {
                e.target.className = "fadeout";
            }, 0);
        });
        element.addEventListener('dragend', (e) => {
            e.target.className = "words";
        });
    });

    Array.from(containeritems).forEach((element) => {
        element.addEventListener('dragover', (e) => {
            e.preventDefault();
            element.classList.add('dragoverColor');
        });
        element.addEventListener('dragleave', () => {
            element.classList.remove('dragoverColor');
        });
        element.addEventListener('drop', (e) => {
            e.preventDefault();
            element.classList.remove('dragoverColor');
            element.append(appendd);
            audio.play();
        });
    });

}
dragDrop();

