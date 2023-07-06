const btnDOM = document.querySelectorAll('.btn');
const nextBtn = document.getElementById('next-btn');
const questionDOM = document.getElementById('question');
const answerbtnDOM = document.getElementById('answer-buttons');


const questions = [
    {
        question: "What is the capital city of Turkey?",
        answers: [
            { text: 'Adana', correct: false },
            { text: 'Bursa', correct: false },
            { text: 'Ankara', correct: true },
            { text: 'İstanbul', correct: false },
        ]
    },
    {
        question: 'Which continent is Turkey located in?',
        answers: [
            { text: 'Antarctica ', correct: false },
            { text: 'Asia ', correct: true },
            { text: 'Europe', correct: false },
            { text: 'Australia', correct: false },
        ]
    },
    {
        question: 'Who is the founder of the Republic of Turkey?',
        answers: [
            { text: 'İsmet İnönü', correct: false },
            { text: 'Fethi Okyar', correct: false },
            { text: 'Celal Bayar', correct: false },
            { text: 'Mustafa Kemal Atatürk', correct: true },
        ]
    },
    {
        question: 'What is the official language of Turkey?',
        answers: [
            { text: 'Arabic ', correct: false },
            { text: 'Turkish  ', correct: true },
            { text: 'Persian', correct: false },
            { text: 'Greek', correct: false },
        ]
    },
    {
        question: 'Which historical city in Turkey is known as the "City of Troy"?',
        answers: [
            { text: 'Çanakkale ', correct: true },
            { text: 'Adıyaman  ', correct: false },
            { text: 'Gaziantep', correct: false },
            { text: 'Şanlıurfa', correct: false },
        ]
    },
]

let nextQuestion = 0;

function showQuestion() {
    const question = questions[nextQuestion];
    questionDOM.innerHTML = `<h2 id="question">${question.question}</h2>`

    answerbtnDOM.innerHTML = '';
    question.answers.forEach((answer) => {
        answerbtnDOM.innerHTML += `<button class="btn">${answer.text}</button>`
    });
};

showQuestion();


nextBtn.addEventListener('click', () => {
    nextQuestion++;
    if (nextQuestion < questions.length) {
        showQuestion();
    } else {
        questionDOM.innerHTML = 'Quiz tamamlandı!';
        answerbtnDOM.innerHTML = '';
        nextBtn.style.display = 'none';
    }

});