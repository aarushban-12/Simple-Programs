const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Manchester"],
        correctAnswer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "What color is the sky?",
        answers: ["Blue", "Green", "Red", "Yellow"],
        correctAnswer: "Blue"
    },
    {
        question: "What is the smallest month of the year?",
        answers: ["January", "April", "October", "February"],
        correctAnswer: "February"
    },
    {
        question: "How many sides are there in a triangle?",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "3"
    },
    
];

function generateQuiz(){
    let form = document.getElementById("quiz-form");
    form.innerHTML = "";

    questions.forEach((question, index) => {
        let questionItem = document.createElement("div");
        let questionName = document.createElement("h3");
        questionItem.classList.add("mb-5");
        
        questionName.textContent = `${index+1}. ${question.question}`;
        questionItem.appendChild(questionName);
        
        question.answers.forEach((answer, index2) => {
            questionChoice = document.createElement("div");
            questionChoice.classList.add("form-check", "form-check-inline", "ml-5");
            questionChoice.innerHTML = `
                <input type="radio" class="form-check-input" name=${index} value=${answer}>
                <label for="answer" class="form-check-label">${answer}</label>
            `;
            
            questionItem.appendChild(questionChoice);
                questionItem.appendChild(document.createElement("br"));   
        });
        form.appendChild(questionItem);
    });
}

function calculateScore() {
    let score = 0;

    questions.forEach((question, index) => {
        if(document.querySelector(`input[name="${index}"]:checked`).value === question.correctAnswer){
            score++;
        }
    });

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p class="result">Your score is: ${score} out of ${questions.length}</p>`;
}

generateQuiz();