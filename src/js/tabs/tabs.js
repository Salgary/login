// const loginCard = document.getElementsByClassName(".login-tab");
// const signCard = document.getElementsByClassName(".sign-tab");

const loginCard = document.getElementById('login-tab-id');
const signCard = document.getElementById('sign-tab-id');

export function viewSign() {
    // const loginCard = document.getElementById('login-tab-id');
    // const signCard = document.querySelector(".sign-tab");
    console.log(loginCard);
    console.log(signCard);
    loginCard.classList.add('login-tab');
    signCard.classList.remove('sign-tab');
}

export function viewLogin() {
    // const signCard = document.getElementById('sign-tab-id');
    // const signCard = document.querySelector(".sign-tab");
    console.log(loginCard);
    console.log(signCard);
    loginCard.classList.remove('login-tab');
    signCard.classList.add('sign-tab');
}


