var i = 6;
function toggleAnswer(id) {
    var answer = document.getElementById(id);
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}
function addQuestion() {
    // Get question, answer from input fields
    let question = document.getElementById("question").value;
    let answer = document.getElementById("answer").value;
    // Create a new div element
    let newQuestion = document.createElement("div");
    newQuestion.className = "faq-item";
    let questionq = document.createElement("div");
    questionq.className = "question";
    questionq.innerHTML = question;
    let answerq = document.createElement("div");
    answerq.className = "answer";
    var v = i+1;
    answerq.id = "answer"+v;
    questionq.onclick = function(){toggleAnswer(answerq.id)};
    answerq.innerHTML = answer
    // Add the question and answer to the new div element
    newQuestion.appendChild(questionq);
    newQuestion.appendChild(answerq);
    // Append the new div element to the end of the div with id="questions"
    document.querySelector("#questions").appendChild(newQuestion);
    // Clear the input fields
    document.querySelector("#question").value = "";
    document.querySelector("#answer").value = "";
    i++;
    localStorage.setItem(answerq.id, JSON.stringify({'question': questionq.innerHTML, 'answer': answerq.innerHTML}));
    localStorage.setItem("i",v);

}
/////////////////Getting the local storage items
function loaclitems(){
    var i1 = Number(localStorage.getItem("i"));
    /////////////////////////Checking items///////////
    if(i1 !== null && i1-i !== 0){
        for(z=i;z<i1;z++){
            var z1 = z+1
            ////////Getting data from loacl storage//////////
            var data = "answer"+z1;
            var content = localStorage.getItem(data);
            ///////////Parsing data from local storage//////////
            var parseData = JSON.parse(content);
            console.log()
            ////////////Creating items////////////////////////
            let question = document.createElement("div");
            question.className = "faq-item";
            let questionq = document.createElement("div");
            questionq.className = "question";
            questionq.innerHTML = parseData.question;
            let answerq = document.createElement("div");
            answerq.className = "answer";
            answerq.id = "answer"+z1;
            answerq.innerHTML = parseData.answer;
            questionq.onclick = function(){toggleAnswer(answerq.id)};
            console.log(answerq.id)
            // Add the question and answer to the new div element
            question.appendChild(questionq);
            question.appendChild(answerq);
            // Append the new div element to the end of the div with id="questions"
            document.querySelector("#questions").appendChild(question);
            
        }
        
    }
}
loaclitems() 