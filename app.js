//Inputs selectprs
const email = document.getElementById("input_email");
const nameInput = document.getElementById("input_name");
const messageInput = document.getElementById("input_msg");

//Error messages selectors
const nameErrorMsg = document.querySelector(".name_error_msg");
const emailErrorMsg = document.querySelector(".email_error_msg");

//Contact Button for scroll to footer
const contactBtnOne = document.getElementById("contact_btn_one");
const contactBtnTwo = document.getElementById("contact_btn_two");
const footer = document.getElementById("footer");

//Check if email value is correct and disply accordingly
const validateEmail = () => {
    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        email.style.borderBottomColor = "hsl(7, 100%, 68%)"
        emailErrorMsg.style.display = "block"
    } else {
        email.style.borderBottomColor = "hsl(153, 71%, 59%)"
        emailErrorMsg.style.display = "none"
    }
};

//Check if name value is correct and disply accordingly
const validateName = () => {
    if(!nameInput.value.match(/^[A-Za-z ]+$/) || nameInput.value.length == 0) {
        nameInput.style.borderBottomColor = "hsl(7, 100%, 68%)"
        nameErrorMsg.style.display = "block"
    } else {
        nameInput.style.borderBottomColor = "hsl(153, 71%, 59%)"
        nameErrorMsg.style.display = "none"
    }
};

//send emails function with emailJS
const sendMail = () => {
    const params = {
        name: nameInput.value,
        emailName: email.value,
        message: messageInput.value
    }
    const servideID = "service_bda0dwb";
const templateID = "template_71losge";

emailjs
    .send(servideID, templateID, params)
    .then((res) =>{
        nameInput.value = nameInput.value;
        emailName.value = emailName.value;
        messageInput.value = messageInput.value;
        console.log(res)
        alert("msg sent")
    })
    .catch((err) => console.log(err));

    nameInput.innerHTML = ""
}

//clear fields after email sent
const clearFields = () => {
    nameInput.value = "";
    email.value = "";
    messageInput.value = "";
}

//scroll to bottom fuction
contactBtnOne.addEventListener("click", () => {
    footer.scrollIntoView()
})

contactBtnTwo.addEventListener("click", () => {
    footer.scrollIntoView()
})
