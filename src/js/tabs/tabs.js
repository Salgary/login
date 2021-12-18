const loginCard = document.getElementById('login-tab-id');
const signCard = document.getElementById('sign-tab-id');
export const elLogin = document.getElementById('login');
export const elSign = document.getElementById('sign');

export function viewSign() {
    console.log(elLogin);
    console.log(elSign);
    loginCard.classList.add('login-tab');
    signCard.classList.remove('sign-tab');
    elSign.classList.add('active');
    elLogin.classList.remove('active');
}

export function viewLogin() {
    console.log(elLogin);
    console.log(elSign);
    loginCard.classList.remove('login-tab');
    signCard.classList.add('sign-tab');
    elLogin.classList.add('active');
    elSign.classList.remove('active');
}


