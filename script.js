 const quizData = [
    { question: "Bharat ke rashtrapati kaun hain?", options: ["Narendra Modi", "Droupadi Murmu", "Amit Shah", "Rajnath Singh"], answer: 1 },
    { question: "Taj Mahal kahan sthit hai?", options: ["Delhi", "Agra", "Jaipur", "Lucknow"], answer: 1 },
    { question: "Himalaya ka sabse uncha shikhar kaun sa hai?", options: ["Nanda Devi", "Mount Everest", "Kanchenjunga", "K2"], answer: 1 },
    { question: "Computer ka dimaag kisse kehte hain?", options: ["CPU", "Mouse", "Keyboard", "Monitor"], answer: 0 },
    { question: "Bharat ka rashtriya khel kaun sa hai?", options: ["Cricket", "Hockey", "Football", "Kabaddi"], answer: 1 },
    { question: "Solar System ka sabse bada grah kaun sa hai?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: 2 },
    { question: "Rashtriya Geet kaun sa hai?", options: ["Vande Mataram", "Jana Gana Mana", "Saare Jahan Se Achha", "Ae Mere Watan Ke Logon"], answer: 0 },
    { question: "Electric bulb ka avishkar kisne kiya?", options: ["Newton", "Thomas Edison", "Albert Einstein", "Galileo"], answer: 1 },
    { question: "Bharat ka rashtriya phool kaun sa hai?", options: ["Gulab", "Kamala", "Surajmukhi", "Chameli"], answer: 1 },
    { question: "Ganga nadi ka udgam sthal kaun sa hai?", options: ["Gangotri", "Haridwar", "Varanasi", "Rishikesh"], answer: 0 }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById("question").innerText = q.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.classList.add("option");
        btn.innerText = String.fromCharCode(65 + index) + ". " + option;
        btn.onclick = () => checkAnswer(btn, index);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(button, index) {
    const q = quizData[currentQuestion];
    const optionButtons = document.querySelectorAll(".option");

    optionButtons.forEach(btn => btn.disabled = true);

    if (index === q.answer) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
        optionButtons[q.answer].classList.add("correct");
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    const container = document.getElementById("quiz-container");
    if (score > 5) {
        container.innerHTML = `<h2>You won! Aap ek sachche deshbhakt hain 🇮🇳</h2><p>Score: ${score}/${quizData.length}</p>`;
    } else {
        container.innerHTML = `<h2>Better luck next time!</h2><p>Score: ${score}/${quizData.length}</p>`;
    }
}

window.onload = loadQuestion;
