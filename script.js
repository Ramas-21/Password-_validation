const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
cost requirementList = document.querySelectorAll(".requirements li");

// An array of password requirements
const requirements = [
    {regex: /.{8,}/, index: 0}, // minimum of 8 characters
    {regex: /[0-9]/, index: 1}, // At least one number
    {regex: /[a-z]/, index: 2}, // At least one lowercase letter
    {regex: /[^A-Za-z0-9]/, index: 3}, // At least one spacial character
    {regex: /[A-Z]/, index: 4}, // At least one uppercase letter
]

passwordInput.addEventListener("keyup", () =>{
    // looping through each object item of the array
    requirements.forEach(item =>{
        // check if the pass matches the requirement regex
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[]
    });
});

eyeIcon.addEventListener("click", () =>{
    // These is to toggle the password input type btn "password" and "text"
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    //these for updating the eye icon class based on the password input type
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});