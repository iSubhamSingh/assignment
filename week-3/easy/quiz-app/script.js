import { quizData } from "./data.js";

console.log(quizData);
let i = 0;
while(i < quizData.length){
    let question = document.getElementById('header');
    question.innerText = quizData[i].question;
    i++;
    
}


