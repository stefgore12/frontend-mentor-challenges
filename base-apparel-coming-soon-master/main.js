const form = document.querySelector("form");

form.addEventListener("submit",  function(e){
    e.preventDefault();
    const alertEmail = document.querySelector(".alert");
    const inputValue = document.querySelector("#emailInput").value;
    const input = document.querySelector("#emailInput");
    const errorMsg = document.querySelector(".error-msg");

    if(!validateEmail(inputValue)){
        alertEmail.style.display = "block"; 
        input.classList.add("error");
        errorMsg.innerHTML = "Please enter a valid email!"
    } else {
        alertEmail.style.display = "none"; 
        input.classList.remove("error");
        errorMsg.innerHTML = "Thank you for submiting!"
        errorMsg.style.color = "green";
    }
})

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}