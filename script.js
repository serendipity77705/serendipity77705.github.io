// the notification
window.alert("Please hire me :)");

// event handler, using click of button
function validateForm(){
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", function validate(event) {
        event.preventDefault();
        const form = document.getElementById("form");
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const phoneNumber = document.getElementById("phone-number").value;
        const email = document.getElementById("email").value;
        const radio = document.getElementById("radio").value;
        const age = document.getElementById("age").value;
        const reason = document.getElementById("reason").value;
        const warning = document.getElementById("warning");

        let pattern = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
        let present = pattern.test(phoneNumber);
        //form validation
        if (!firstName || !lastName) {
            warning.style.backgroundColor = "red";
            warning.style.color = "white";
            warning.innerHTML = "Please write your first and last name";
        } else if(!age){
            warning.style.backgroundColor = "red";
            warning.style.color = "white";
            warning.innerHTML = "Please tell me your age.";
        } else if (age < 0 || age > 100) {
            warning.style.backgroundColor = "red";
            warning.style.color = "white";
            warning.innerHTML = "This is not your real age.";
        } else if(!phoneNumber && !email){
            warning.style.backgroundColor = "red";
            warning.style.color = "white";
            warning.innerHTML = "Please provide either your phone number, email or both.";
        } else if (phoneNumber.length < 10 || phoneNumber.length > 0 && present == false) {
            warning.style.backgroundColor = "red";
            warning.style.color = "white";
            warning.innerHTML = "Please provide a valid phone number.";
            return false;
        } else if (!reason) {
            warning.style.backgroundColor = "red";
            warning.style.color = "white";
            warning.innerHTML = "Please tell me the reason that you contacted me.";
        } else {
            warning.style.backgroundColor = "green";
            warning.style.color = "white";
            warning.innerHTML = "Thank you! I will get back to you soon.";
        }
    });
}

validateForm();

// toggling on and  off the different themes
function darkMode() {
    const dark = document.body;
    dark.classList.toggle("dark-mode");
}


function pinkMode() {
    const pink = document.body;
    pink.classList.toggle("pink-mode");
}


//other event handler, uses mouseover, code influenced from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseover_addeventlistener
document.getElementById("hover").addEventListener("mouseover", over);
document.getElementById("hover").addEventListener("mouseout", out);
function over(){
    document.getElementById("hover").style.color = "purple";
}

function out(){
    document.getElementById("hover").style.color = "black";
}

