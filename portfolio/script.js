const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    /* Reset errors */
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    /* Name Validation */
    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    /* Email Validation */
    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }

    /* Message Validation */
    if (message === "") {
        messageError.textContent = "Message cannot be empty";
        isValid = false;
    }

    if (isValid) {
        alert("Message sent successfully!");
        form.reset();
    }
});

/* Email Validator */
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}