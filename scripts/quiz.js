let quiz    = document.getElementById("quiz");
let answerA = document.getElementById("answerA");
let answerB = document.getElementById("answerB");
let answerC = document.getElementById("answerC");
let answerD = document.getElementById("answerD");
//eerste vraag

setTimeout(quiz1, 500);
    
function quiz1(){
    quiz   .src = '';
    answerA.innerHTML = '';
    answerB.innerHTML = '';
    answerC.innerHTML = '';
    answerD.innerHTML = '';
}