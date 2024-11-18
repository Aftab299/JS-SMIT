
let hourSp = document.getElementById('hours');
let minuteSp = document.getElementById('minutes');
let secondSp = document.getElementById('seconds');
let periodSp = document.getElementById('period');


let mydate=new Date();

// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toISOString());


let dateset=document.getElementById("dateget");

 let dateget=mydate.toDateString();
 dateset.innerHTML = dateget;
setInterval(function() {
    
    let time = new Date();

    
    let hours = time.getHours(); 
    let minutes = time.getMinutes(); 
    let seconds = time.getSeconds(); 
    let period = "AM"; 

    
    if (hours >= 12) {
        period = "PM";
    }


    if (hours > 12) {
        hours = hours - 12; 
    }

   
    if (hours === 0) {
        hours = 12;
    }

    
    if (minutes < 10) {
        minutes = "0" + minutes; 
    }
    if (seconds < 10) {
        seconds = "0" + seconds; 
    }

    
    hourSp.innerHTML = hours;     
    minuteSp.innerHTML = minutes; 
    secondSp.innerHTML = seconds; 
    periodSp.innerHTML = period;  

}, 1000); 




