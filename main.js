
let email = document.getElementById("email");
let error = document.getElementById("email-error");
let btn = document.querySelector(".email-btn")

function validation(){
    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            error.innerHTML = "Please provide a valid email address";
            email.style.borderColor = '#ff5263';
            return false
        }

        email.style.borderColor = "#c2d3ff"
        error.innerHTML = ""
        return true
        
    }

    
btn.addEventListener("click",()=>{
    if(email.value === ""){
        error.innerHTML = "Whoops! It looks like you forgot to add your email";
    }
    else if(email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    email.value = "";
    error.innerHTML = "";
    }
})
    