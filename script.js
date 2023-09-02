const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");

// An array of password requirements
const requirements = [
    {regex: /.{8,}/, index: 0},
    {regex: /[0-9]/, index: 1},
    {regex: /[a-z]/, index: 2},
    {regex: /[^A-Za-z0-9]/, index: 3},
    {regex: /[A-Z]/, index: 4},
]

passwordInput.addEventListener("keyup", () =>{

});

eyeIcon.addEventListener("click", () =>{
    // These is to toggle the password input type btn "password" and "text"
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    //these for updating the eye icon class based on the password input type
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});