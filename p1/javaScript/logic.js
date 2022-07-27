let corrAudio=new Audio('music//success.mp3');
let wronAudio=new Audio('music//wrong.mp3');
let reset=document.getElementById('again');
reset.addEventListener('click',()=>{
    window.location.reload();
})
let ques = [
    {
        question: `1. The little girl’s inflated toy seal was rapidly carried away by the ocean waves.`,
        option1: "Inflated",
        option2: "Carried",
        option3: "Away",
        option4: "Rapidly",
    },
    {
        question: `2. The researchers conducted many clinical trials of the new drug.`,
        option1: "Conducted",
        option2: "Clinical",
        option3: "Of the",
        option4: "Drug",
    },
    {
        question: `3. Mary set the table with fine china, crystal, and sterling.`,
        option1: "The",
        option2: "Table",
        option3: "Set",
        option4: "Fine",
    },
    {
        question: `4. They were still in the same conversation as before when I got back.`,
        option1: "Still",
        option2: "Same",
        option3: "Before",
        option4: "Were",
    },
    {
        question: `5. A great many sweeping reforms were implemented by the President’s legislation.`,
        option1: "Implemented",
        option2: "Reforms",
        option3: "By",
        option4: "Legislation",
    },
    {
        question: `6. The children played with blocks as toddlers.`,
        option1: "The",
        option2: "Played",
        option3: "With",
        option4: "Blocks",
    },
    {
        question: `7. The suggestion in this report was that the agency was not doing its job.`,
        option1: "In",
        option2: "Not",
        option3: "Doing",
        option4: "Its",
    },
    {
        question: `8. The teacher didn’t intend to hurt your feelings with his comments.`,
        option1: "Feelings",
        option2: "Comments",
        option3: "With",
        option4: "Intend",
    },
    {
        question: `9. The worn clothes were laid on the pile of charity donations.`,
        option1: "Worn",
        option2: "Clothes",
        option3: "Laid",
        option4: "On the",
    },
    {
        question: `10. Multiple alternatives for the proposal were suggested by the committee.`,
        option1: "Alternatives",
        option2: "Suggested",
        option3: "For",
        option4: "By",
    }
];
let ans = [
    "Carried", "Conducted", "Set", "Were", "Implemented", "Played", "Doing", "Intend", "Laid", "Suggested"
];
let items = document.getElementsByClassName('items');
let index = 0;
Array.from(items).forEach((element) => {
    element.children[0].innerText = ques[index].question;
    element.children[1].children[0].innerText = ques[index].option1;
    element.children[1].children[1].innerText = ques[index].option2;
    element.children[1].children[2].innerText = ques[index].option3;
    element.children[1].children[3].innerText = ques[index].option4;
    index += 1;
});
let blocks = document.getElementsByClassName('blocks');
let options = document.getElementsByClassName('options');

Array.from(blocks).forEach((element)=>{
    let wrong=true;
    element.addEventListener('click',()=>{
        for(let i=0;i<10;i++){
        if(element.innerText.toLowerCase()===ans[i].toLowerCase()){
            element.classList.add('blocksCorr');
            corrAudio.play();
            wrong=false;
        }
        }
        if(wrong){
            element.classList.add('blocksWrong');
            wronAudio.play();
        }
    });
})

