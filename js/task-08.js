const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const newRegisr = {};
    const formData = new FormData(event.currentTarget);
         const {
    elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
    return window.alert("Bсі поля повинні бути заповнені!");
    } 
    formData.forEach((value, name) => {
        
        newRegisr[name] = value; 
            
    });
    
    console.log(newRegisr);
    event.currentTarget.reset();
  
   
    // console.log(`Email: ${email.value}, Password: ${password.value}`);
    
    // return newRegisr;
}