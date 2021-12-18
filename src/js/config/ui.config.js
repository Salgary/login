const UI = {
  form: document.forms['loginForm'],
  inputEmail: document.getElementById('email'),
  inputPassword: document.getElementById('password'),
  // UI for signUP
  inputEmailSign: document.getElementById('sign-email'),
  inputPasswordSign: document.getElementById('sign-password'),
  inputNickname: document.getElementById('nickname'),
  inputFirstName: document.getElementById('first_name'),
  inputLastName: document.getElementById('last_name'),
  inputPhone: document.getElementById('phone'),
  inputGender: document.getElementById('gender'),
  inputCity: document.getElementById('city'),
  inputCountry: document.getElementById('country'),
  inputBirthDay: document.getElementById('date_of_birth_day'),
  inputBirthMonth: document.getElementById('date_of_birth_month'),
  inputBirthYear: document.getElementById('date_of_birth_year'),  
};

export default UI;
console.log('this is ui config');
