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




let score = 0;
let total = Question.length;
let index = 0;
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');


nextButton.disabled = true;


let loadQuestion = () => {
    questionElement.innerText = "";
    const question = Question[index];
    questionElement.innerText = `${index + 1} ) ${question.ques}`;
    console.log(questionElement.innerText);


    for (let key in question) {
        if (key !== "ques" && key !== "correct") {

            let optionInput = document.createElement("input");
            optionInput.type = "radio";
            optionInput.name = "option",
                optionInput.value = key;

            optionInput.addEventListener("change", () => {
                nextButton.disabled = false;
            });


            let Label = document.createElement("label");
            Label.innerText = question[key];


            let optionShow = document.createElement("div");
            optionShow.className = "OptionDisplay";
            optionShow.style.textAlign = "left";
            // optionShow.style.backgroundColor="red";
            optionShow.style.marginTop = "10px";

            optionShow.appendChild(optionInput);
            optionShow.appendChild(Label);
            optionsElement.appendChild(optionShow);


        }

    }
    nextButton.disabled=true;
};
loadQuestion();

let checkAnswer = () => {
    let selectOption = document.querySelector(`input[name="option"]:checked`); // Use the correct name attribute
    if (selectOption) {
        const UserAns = selectOption.value;
        const correctAns = Question[index].correct;

        if (UserAns === correctAns) {
            score++;
            // alert("Right Answer");

        } else {
            alert("wrong Answer");
        }
    } else {
        alert("Select the OPtion")
    }
};
let moveNext = () => {
    checkAnswer();
    index++;
    optionsElement.innerText = "";

    if (index === total) {

        questionElement.innerText = `Your score: ${score} / ${total}`;
        nextButton.style.display = "none";
        alert("Game over! Your final score is: " + score + " out of " + total);
        return;
    }

    loadQuestion();
};

let