const questions=[
    {
        question :"How Many Continents in the World?",
        answer:[
            { text: "ONE",correct: false},
            { text: "SEVEN",correct: true},
            {
                text:"FIVE",correct: false
            },
            {
                text:"SIX",correct:false
            }
        ]
    }, {
        question :"How Many Countries in the World?",
        answer:[
            { text: "196",correct: true},
            { text: "185",correct: false},
            {
                text:"200",correct: false
            },
            {
                text:"90",correct:false
            }
        ]
    }, {
        question :"How Many Oceans in the World?",
        answer:[
            { text: "Four",correct: true},
            { text: "SEVEN",correct: false},
            {
                text:"FIVE",correct: false
            },
            {
                text:"SIX",correct:false
            }
        ]
    }
]

const questionElement=document.querySelector(".question");
const answerButton=document.querySelector(".answers");
const nextButton=document.querySelector("#next-btn");
const h1=document.querySelector(".App h1");



let currentindex=0;
let score=0;
function startQuiz(){
    currentindex=0;
    score=0;
    nextButton.innerHTML=`NEXT`;
    nextButton.addEventListener('click',nextQuestion)

    h1.style.borderBottom="1px solid black";

    displayQuestions();
}
function resetQuestions(){
    nextButton.style.display="none";
    while(questionElement.firstElementChild){
        questionElement.removeChild(questionElement.firstElementChild)
    }

   
}
function showScore(){
    resetQuestions();
    let btn=document.createElement("button");
    btn.innerHTML="You Scored : "+score;
    btn.disabled=true;
    questionElement.appendChild(btn);
    nextButton.innerHTML="Play Again"
    nextButton.style.display="block";
    let h1=document.querySelector(".App h1");
    h1.style.borderBottom="none";
}
function handleQuestions(){
    currentindex++; 

    if(currentindex<questions.length){
        displayQuestions();
    }
    else{
        showScore();
    }
}
function nextQuestion(){
    if(currentindex<questions.length){
      handleQuestions();
    }
    else {
      
        startQuiz();
    }
}
function answerFunction(e){
   const selectedButton=e.target;
   const isCorrect=selectedButton.dataset.correct==='true';
   if(isCorrect){
    selectedButton.classList.add("correct");
    score++;
   }else {
    selectedButton.classList.add("incorrect");
   }
   Array.from(questionElement.children).forEach((button)=>{
      if(button.dataset.correct){
        if(button.dataset.correct==='true'){
            button.className="correct"
        }
        button.disabled=true;
        button.style.cursor="no-drop"
      }
   })

   nextButton.style.display="block"
   
}
function displayQuestions(){
    resetQuestions();
   let x=document.createElement("h2");
   x.innerHTML="Q:"+(currentindex+1)+" "+questions[currentindex].question;
   let z=document.createElement("h3");
   z.innerHTML=`Remaining Questions : ${questions.length-currentindex}`;
   questionElement.appendChild(z);
   questionElement.appendChild(x);

   let currentQuestion=questions[currentindex];
//    for loop here
   currentQuestion.answer.forEach((answer)=>{
     let answerBtn=document.createElement("button");
     answerBtn.innerHTML=answer.text;
    //  answerBtn.classList.add("answers")
     answerBtn.dataset.correct=answer.correct;
     answerBtn.addEventListener('click',answerFunction)
     questionElement.appendChild(answerBtn);
   })
}
startQuiz();