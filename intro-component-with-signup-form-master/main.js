document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    const inputs = document.querySelectorAll(".not-empty");
    const errorMsg = document.querySelectorAll(".error-msg");
    const errorImg = document.querySelectorAll(".error-img");

    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].value == ''){
            errorImg[i].style.display = "block";
            errorMsg[i].style.display = "block";
            inputs[i].style.border = "2px solid red";
        } else {
            errorImg[i].style.display = "none";
            errorMsg[i].style.display = "none";
            inputs[i].style.border = "1px solid hsl(246, 25%, 77%)";
            inputs[i].value = '';
        }
    }

    const emailInput = document.querySelector(".not-valid-email");
    const emailMsg = document.querySelector(".not-valid-msg");
    const emailImg = document.querySelector(".not-valid-img");

    if(!validateEmail(emailInput.value)){
        emailMsg.style.display = "block";
        emailImg.style.display = "block";
        emailInput.style.border = "2px solid red";
    } else {
        emailMsg.style.display = "none";
        emailImg.style.display = "none";
        emailInput.style.border = "1px solid hsl(246, 25%, 77%)";
        inputs[i].value = '';
    }

})

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}