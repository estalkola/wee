
const loginForm = document.querySelector("#loginform");
// const loginForm2 = document.getElementById("loginform");
const loginInput = document.querySelector("#loginform input");

const greetingHeader = document.querySelector("#greeting")

loginForm.addEventListener("submit", getName);
// loginForm2.addEventListener("submit", getName);

function getName(param) {
    param.preventDefault();
    const username = loginInput.value;
    // alert("username : " + username);
    loginForm.style.display = "none";

    greetingHeader.innerHTML = "안녕하세요! " + username;

    localStorage.setItem("myusername", username);

}

const stored_username = localStorage.getItem("myusername");

if (stored_username === null) {

} else {
    loginForm.style.display = "none";
    greetingHeader.innerHTML = "안녕하세요! " + stored_username;

}