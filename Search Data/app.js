var userData = [
    {
        name: 'aftab',
        email: 'aftab@gmail.com',
        password: '12345',
        rollNumber: "236171"
    },
    {
        name: 'dozan',
        email: 'dozan32@gmail.com',
        password: '12345',
        rollNumber: "236172"
    },
    {
        name: 'dayal',
        email: 'dayal123@gmail.com',
        password: '12345',
        rollNumber: "236173"
    },
    {
        name: 'waseem',
        email: 'waseem@gmail.com',
        password: '12345',
        rollNumber: "236174"
    },
    {
        name: 'majid',
        email: 'majid29@gmail.com',
        password: '12345',
        rollNumber: "236175"
    },
    {
        name: 'junaid',
        email: 'junaid42@gmail.com',
        password: '12345',
        rollNumber: "236176"
    }
];

let usernameData = false; 

function gmailValid(email) {
    var inpValue = email.target.value;
    if (inpValue.indexOf("@gmail.com") === -1) {
        email.target.nextElementSibling.innerText = "Invalid Gmail";
        email.target.nextElementSibling.style.display = 'block';
        usernameData = false;
        return;
    }
    email.target.nextElementSibling.style.display = 'none';
    usernameData = true; // Mark valid if Gmail passes
}

function rollNumValid(char) {
    var inpValue = char.target.value;
    var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < inpValue.length; i++) {
        if (alphabet.includes(inpValue[i])) {
            char.target.nextElementSibling.innerText = "Roll Number must be numeric!";
            char.target.nextElementSibling.style.display = 'block';
            return;
        }
    }
    char.target.nextElementSibling.style.display = 'none';
}

function submitData(e) {
    e.preventDefault();
    
    // Collect references to elements
    var userInfo = document.getElementsByClassName("userinfo")[0];
    var resultError = document.getElementsByClassName("result-error")[0];
    var gmail = document.getElementById("email");
    var username = document.getElementById("username");
    var rollNum = document.getElementById("rollnum");
    var mailSpan = document.getElementById("emailspan");
    var nameSpan = document.getElementById("namespan");
    var rollSpan = document.getElementById("rollspan");
    var passwordSpan = document.getElementById("passwordspan");

    if (!usernameData) {
        resultError.style.display = 'block';
        resultError.innerText = "Invalid data provided!";
        return;
    }

    // Loop through user data
    for (var i = 0; i < userData.length; i++) {
        if (
            userData[i].name === username.value.toLowerCase() &&
            userData[i].rollNumber === rollNum.value &&
            userData[i].email === gmail.value
        ) {
            userInfo.style.display = 'block';
            resultError.style.display = 'none';

            // Populate user info
            nameSpan.innerText = `NAME: ${userData[i].name}`;
            rollSpan.innerText = `ROLL NUMBER: ${userData[i].rollNumber}`;
            mailSpan.innerText = `EMAIL: ${userData[i].email}`;
           

            // Reset form inputs
            username.value = '';
            rollNum.value = '';
            gmail.value = '';
            usernameData = false; // Reset for next submission
            return;
        }
    }

    // If no match found
    userInfo.style.display = 'none';
    resultError.style.display = 'block';
    resultError.innerText = "No matching user found!";
}
