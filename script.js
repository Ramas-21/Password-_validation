const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");

eyeIcon.addEventListener("click", () =>{
    // These is to toggle the password input type btn "password" and "text"
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    //these for updating the eye icon class based on the password input type
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});