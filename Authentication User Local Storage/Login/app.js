let formField = document.querySelectorAll("form input");
//  console.log(formField);
 

 const [ loginEmail, loginPassword] = formField;

 let Data=JSON.parse( localStorage.getItem('users'));
 const {userEmail, userPassword} = Data
 
 let login= (e) => {
    e.preventDefault(); 
     console.log(userEmail,userPassword);
     
     console.log( loginEmail.value, loginPassword.value);
     
     console.log(Data);
     
    }
   