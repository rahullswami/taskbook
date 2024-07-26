let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;
let totalTime = 0;
let timer;
let username = '';
let questions = {
    pipes: [
        {
            question: "Two pipes A and B can fill a tank in 20 minutes and 30 minutes respectively. If both pipes are opened together, how long will it take to fill the tank?",
            options: ["12 minutes", "15 minutes", "25 minutes", "35 minutes"],
            answer: "15 minutes"
        },
        {
            question: "A cistern has two pipes. Pipe A can fill it in 8 hours and pipe B can empty it in 12 hours. If both pipes are opened together, how long will it take to empty the cistern?",
            options: ["18 hours", "24 hours", "30 hours", "36 hours"],
            answer: "36 hours"
        },
        {
            question: "Pipe A can fill a tank in 4 hours, and pipe B can fill the same tank in 6 hours. If both pipes are opened together, how long will it take to fill the tank?",
            options: ["2 hours", "2.4 hours", "3 hours", "3.5 hours"],
            answer: "2.4 hours"
        },
        {
            question: "Pipe A can fill a tank in 10 hours, and pipe B can fill the same tank in 15 hours. If both pipes are opened together, how long will it take to fill the tank?",
            options: ["5 hours", "6 hours", "7 hours", "8 hours"],
            answer: "6 hours"
        },
        {
            question: "Two pipes A and B can fill a tank in 16 minutes and 24 minutes respectively. If both pipes are opened together, how long will it take to fill the tank?",
            options: ["8 minutes", "9.6 minutes", "10 minutes", "12 minutes"],
            answer: "9.6 minutes"
        },
        {
            question: "Pipe A can fill a tank in 12 hours, but due to a leak, it takes 20% more time. How long will it take to fill the tank now?",
            options: ["14.4 hours", "15 hours", "16 hours", "18 hours"],
            answer: "14.4 hours"
        },
        {
            question: "Two pipes A and B can fill a tank in 12 minutes and 18 minutes respectively. If both pipes are opened together, how long will it take to fill the tank?",
            options: ["7.2 minutes", "8 minutes", "9 minutes", "10 minutes"],
            answer: "7.2 minutes"
        }
    ],
    probability: [
        {
            question: "What is the probability of getting a sum of 7 when two dice are thrown?",
            options: ["1/6", "1/3", "1/4", "1/2"],
            answer: "1/6"
        },
        {
            question: "If a card is drawn from a well-shuffled deck of 52 cards, what is the probability of getting a king?",
            options: ["1/13", "1/26", "1/39", "1/52"],
            answer: "1/13"
        },
        {
            question: "What is the probability of getting a head when flipping a fair coin?",
            options: ["1/2", "1/3", "1/4", "1/5"],
            answer: "1/2"
        },
        {
            question: "If two cards are drawn from a well-shuffled deck of 52 cards, what is the probability that both are aces?",
            options: ["1/169", "1/221", "1/1326", "1/26"],
            answer: "1/1326"
        },
        {
            question: "What is the probability of getting a sum of 9 when two dice are thrown?",
            options: ["1/9", "1/8", "1/12", "1/18"],
            answer: "1/9"
        },
        {
            question: "What is the probability of drawing a red card from a well-shuffled deck of 52 cards?",
            options: ["1/2", "1/3", "1/4", "1/13"],
            answer: "1/2"
        },
        {
            question: "If a card is drawn from a well-shuffled deck of 52 cards, what is the probability of getting a queen of hearts?",
            options: ["1/52", "1/26", "1/13", "1/4"],
            answer: "1/52"
        }
    ],
    age: [
        {
            question: "A father is three times as old as his son. After 12 years, he will be twice as old as his son. How old is the father now?",
            options: ["36 years", "42 years", "45 years", "48 years"],
            answer: "36 years"
        },
        {
            question: "The present age of a mother is 3 times the age of her son. After 5 years, their ages will add up to 70 years. What is the present age of the son?",
            options: ["10 years", "15 years", "20 years", "25 years"],
            answer: "20 years"
        },
        {
            question: "A man is 24 years older than his son. In two years, his age will be twice the age of his son. What is the present age of his son?",
            options: ["20 years", "22 years", "24 years", "26 years"],
            answer: "20 years"
        },
        {
            question: "The ratio of the ages of two friends is 4:5 and the sum of their ages is 45 years. What is the age of the younger friend?",
            options: ["18 years", "20 years", "24 years", "25 years"],
            answer: "18 years"
        },
        {
            question: "A father is twice as old as his son. Five years ago, the sum of their ages was 60 years. How old is the son now?",
            options: ["20 years", "25 years", "30 years", "35 years"],
            answer: "25 years"
        },
        {
            question: "A mother is four times as old as her daughter. In 10 years, she will be three times as old as her daughter. How old is the mother now?",
            options: ["30 years", "32 years", "35 years", "40 years"],
            answer: "40 years"
        },
        {
            question: "The sum of the ages of a father and his son is 50 years. Five years ago, the father's age was three times the age of his son. What are their present ages?",
            options: ["35 years, 15 years", "30 years, 20 years", "40 years, 10 years", "32 years, 18 years"],
            answer: "35 years, 15 years"
        }
    ],
    profit: [
        {
            question: "A shopkeeper bought a TV for ₹20,000 and sold it for ₹22,000. What is the profit percentage?",
            options: ["5%", "10%", "15%", "20%"],
            answer: "10%"
        },
        {
            question: "A man bought a cycle for ₹1,200 and sold it for ₹1,500. Find his gain percent.",
            options: ["10%", "15%", "20%", "25%"],
            answer: "25%"
        },
        {
            question: "A trader bought some goods for ₹900 and sold them for ₹1,200. Find his profit percentage.",
            options: ["25%", "33.33%", "40%", "50%"],
            answer: "50%"
        },
        {
            question: "A man bought a chair for ₹500 and sold it for ₹450. Find his loss percentage.",
            options: ["5%", "10%", "15%", "20%"],
            answer: "10%"
        },
        {
            question: "A trader bought a car for ₹2,00,000 and sold it for ₹2,50,000. Find his gain percent.",
            options: ["10%", "20%", "25%", "30%"],
            answer: "25%"
        },
        {
            question: "A man bought a fridge for ₹18,000 and sold it for ₹15,000. Find his loss percentage.",
            options: ["10%", "15%", "16.67%", "20%"],
            answer: "16.67%"
        },
        {
            question: "A shopkeeper bought a computer for ₹50,000 and sold it for ₹45,000. What is the loss percentage?",
            options: ["5%", "8%", "10%", "12%"],
            answer: "10%"
        }
    ]
};


function startQuiz() {
    username = document.getElementById('username').value;
    if (username === '') {
        alert('Please enter your name');
        return;
    }
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('quiz-page').classList.remove('hidden');
    startTimer();
}

function selectCategory(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
}

function displayQuestion() {
    const questionObj = questions[currentCategory][currentQuestionIndex];
    const quizContainer = document.getElementById('quiz-container-qustions');
    quizContainer.innerHTML = `
        <div id="quiz-container"><h2>Question ${currentQuestionIndex + 1}</h2>
        <p>${questionObj.question}</p></div>
        ${questionObj.options.map((option, index) => `
            <button onclick="checkAnswer('${option}')">${option}</button>
        `).join('')}
    `;
}

function checkAnswer(selectedOption) {
    const questionObj = questions[currentCategory][currentQuestionIndex];
    if (selectedOption === questionObj.answer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentCategory].length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function startTimer() {
    let startTime = Date.now();
    timer = setInterval(() => {
        totalTime = Math.floor((Date.now() - startTime) / 1000);
        document.getElementById('timer').textContent = `${totalTime}s`;
    }, 1000);
}

function showResults() {
    clearInterval(timer);
    document.getElementById('quiz-page').classList.add('hidden');
    document.getElementById('result-page').classList.remove('hidden');
    document.getElementById('result-name').textContent = username;
    document.getElementById('result-time').textContent = `${totalTime}s`;
    document.getElementById('total-questions').textContent = questions[currentCategory].length;
    document.getElementById('attempted-questions').textContent = currentQuestionIndex;
    document.getElementById('correct-questions').textContent = score;
    document.getElementById('wrong-questions').textContent = currentQuestionIndex - score;
    document.getElementById('result-score').textContent = ((score / currentQuestionIndex) * 100).toFixed(2);
}

function startAgain() {
    document.getElementById('result-page').classList.add('hidden');
    document.getElementById('home-page').classList.remove('hidden');
    username = '';
    totalTime = 0;
    clearInterval(timer);
}

function goHome() {
    startAgain();
    document.getElementById('quiz-page').classList.add('hidden');
    document.getElementById('result-page').classList.add('hidden');
    document.getElementById('home-page').classList.remove('hidden');
}

