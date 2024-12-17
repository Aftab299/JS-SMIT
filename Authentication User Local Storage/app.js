
 let formField = document.querySelectorAll("form input");
 console.log(formField);
 

 const [username, email, password] = formField;
 console.log(username, email, password);

 let userData = [] 
  
let signin = (e) => {
    e.preventDefault(); 
    if (username.value !== "" && email.value !== "" && password.value !== "") {
        console.log(username.value, email.value, password.value);

        
        let obj = {
            userName: username.value,
            userEmail: email.value,
            userPassword: password.value,
        };

        userData.push(obj);
        localStorage.setItem('users', JSON.stringify(userData));
        console.log("Updated User Data:", userData);
       
        window.location.replace('./Login/index.html')
    } else {
        
        alert("Fill the Input Fields");
    }
};


 