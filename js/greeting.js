const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME = "userName";

function onLoginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem(USER_NAME,userName);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(userName);
}

function paintGreeting(userName){
    greeting.innerText = `Hello ${userName}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USER_NAME);

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreeting(savedUserName);
}