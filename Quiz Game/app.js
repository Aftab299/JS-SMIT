let Question = [{
        'ques': 'Which team won the Cricket World Cup 1992?',
        'a': 'Pakistan',
        'b': 'India',
        'c': 'Australia',
        'd': 'West Indies',
        'correct': 'a',
    },
    {
        'ques': 'Who holds the record for the most goals in FIFA World Cup history?',
        'a': 'Cristiano Ronaldo',
        'b': 'Pele',
        'c': 'Miroslav Klose',
        'd': 'Lionel Messi',
        'correct': 'c',
    },
    {
        'ques': 'Which is the largest planet in our Solar System?',
        'a': 'Earth',
        'b': 'Mars',
        'c': 'Jupiter',
        'd': 'Saturn',
        'correct': 'c',
    },
    {
        'ques': 'Which country is known as the Land of the Rising Sun?',
        'a': 'China',
        'b': 'Japan',
        'c': 'Thailand',
        'd': 'South Korea',
        'correct': 'b',
    },
    {
        'ques': 'What is the chemical symbol for Gold?',
        'a': 'Go',
        'b': 'Au',
        'c': 'Ag',
        'd': 'Pt',
        'correct': 'b',
    },
    {
        'ques': 'Who wrote the play "Hamlet"?',
        'a': 'Charles Dickens',
        'b': 'William Shakespeare',
        'c': 'Mark Twain',
        'd': 'George Orwell',
        'correct': 'b',
    },
    {
        'ques': 'Which year did the Titanic sink?',
        'a': '1905',
        'b': '1912',
        'c': '1918',
        'd': '1923',
        'correct': 'b',
    },
    {
        'ques': 'What is the capital of Australia?',
        'a': 'Sydney',
        'b': 'Melbourne',
        'c': 'Canberra',
        'd': 'Brisbane',
        'correct': 'c',
    },
    {
        'ques': 'Which is the longest river in the world?',
        'a': 'Amazon',
        'b': 'Nile',
        'c': 'Yangtze',
        'd': 'Mississippi',
        'correct': 'b',
    },
    {
        'ques': 'Who discovered penicillin?',
        'a': 'Marie Curie',
        'b': 'Alexander Fleming',
        'c': 'Louis Pasteur',
        'd': 'Gregor Mendel',
        'correct': 'b',
    }
];


let queInp = document.getElementById("queBox");
let optionInp = document.querySelectorAll('.option');
let total = Question.length;
let right = 0;
let wrong = 0;

let index = 0;

let loadquestion = () => {
    if (index === total) {
        return endQuiz();
    }

    const data = Question[index];
    queInp.innerText = `${index + 1}) ${data.ques}`;
    optionInp[0].nextElementSibling.innerText = data.a;
    optionInp[1].nextElementSibling.innerText = data.b;
    optionInp[2].nextElementSibling.innerText = data.c;
    optionInp[3].nextElementSibling.innerText = data.d;

    reset();
};

let submitQuiz = () => {
    const data = Question[index];
    let ans = getAns();
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }

    index++;
    loadquestion();
};

let getAns = () => {
    let answer;
    optionInp.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
};

const reset = () => {
    optionInp.forEach((input) => {
        input.checked = false;
    });
};

let endQuiz = () => {
    let box = document.querySelector('.box'); 
    box.innerHTML = `
        <h2>Thanks for Playing</h2>
        <p>${right} / ${total} are correct</p>
    `;
};


loadquestion();
