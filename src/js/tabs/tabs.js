const loginCard = document.getElementById('login-tab-id');
const signCard = document.getElementById('sign-tab-id');
const getLogin = document.getElementById('login');
const getTab = document.getElementById('sign');

export function viewSign() {
    console.log(getLogin);
    console.log(getTab);
    loginCard.classList.add('login-tab');
    signCard.classList.remove('sign-tab');
    getTab.classList.add('active');
    getLogin.classList.remove('active');
}

export function viewLogin() {
    console.log(getLogin);
    console.log(getTab);
    loginCard.classList.remove('login-tab');
    signCard.classList.add('sign-tab');
    getLogin.classList.add('active');
    getTab.classList.remove('active');

}


