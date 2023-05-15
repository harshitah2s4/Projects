const questions=[
    {
        question:"Which is the largest animal in the World?",
        answers:[
            {text:"Shark", correct:false},
            {text:"Blue whale", correct:true},
            {text:"Elephant", correct:false},
            {text:"Giraffe", correct:true}
        ]
    },

    {
        question:"Which is the largest desert in the World?",
        answers:[
            {text:"Kalahari", correct:false},
            {text:"Antarctica", correct:true},
            {text:"Gobi", correct:false},
            {text:"Sahara", correct:true}
        ]
    },
    {
        question:"Which is the smallest country in the World?",
        answers:[
            {text:"Kanpur", correct:false},
            {text:"Vatican City", correct:true},
            {text:"Geneva", correct:false},
            {text:"South Africa", correct:true}
        ]
    },
    {
        question:"Which is a Prime number?",
        answers : [
            {text:"54", correct:false},
            {text:"3", correct:true},
            {text:"0", correct:false},
            {text:"98", correct:true}
        ]
    }

]

const questionelement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
