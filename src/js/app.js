import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UI from './config/ui.config';
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './views/form';
import { login } from './services/auth.service';
import { notify } from './views/notifications';
import { getNews } from './services/news.service';
import { signup } from './sign/signup';
import {elLogin, elSign, viewSign, viewLogin} from './tabs/tabs';
import { getCountries, getCities } from './autocomplete/get.country';
import { createAutocompleteJQ } from './autocomplete/jq.autocomplete';

const { form, inputEmail, inputPassword, inputEmailSign, inputPasswordSign, inputNickname, inputFirstName, inputLastName, inputPhone, inputGender,inputCountry,inputCity, inputBirthDay, inputBirthMonth, inputBirthYear } = UI;

const inputs = [inputEmail, inputPassword];

const inputsSign = [inputEmailSign, inputPasswordSign, inputNickname, inputFirstName, inputLastName, inputPhone, inputGender, inputCity, inputCountry, inputBirthDay, inputBirthMonth, inputBirthYear];

// Tabs
elSign.addEventListener('click', (e) => {
viewSign();
});

elLogin.addEventListener('click', (e) => {
viewLogin();
});

// Events document.forms['loginForm']
form.addEventListener('submit', e => {
  e.preventDefault();
  onSubmit();
});

document.forms.signForm.addEventListener('submit', e => {
  e.preventDefault();
  onSignSubmit();
  console.log('onSignSubmit run');
});

inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)));


// Handlers
async function onSubmit() {
  const isValidForm = inputs.every(el => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      showInputError(el);
    }
    return isValidInput;
  });

  if (!isValidForm) return;

  try {
    await login(inputEmail.value, inputPassword.value);
    await getNews();
    form.reset();
    notify({ msg: 'Login success', className: 'alert-success' });
  } catch (err) {
    notify({ mes: 'Login failed', className: 'alert-danger' });
  }
}

// Handler for Sign
async function onSignSubmit() {
  const isValidForm = inputsSign.every(el => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      showInputError(el);
    }
    console.log(el)
    return isValidInput;
  });
  console.log(isValidForm);
  if (!isValidForm) return;

  try {
    await signup(inputEmailSign.value, inputPasswordSign.value, inputNickname.value, inputFirstName.value, inputLastName.value, inputPhone.value, inputGender.value, inputCity.value, inputCountry.value, inputBirthDay.value, inputBirthMonth.value, inputBirthYear.value);
    console.log(inputEmailSign.value);
    console.log(inputPasswordSign.value);
    notify({ msg: 'Sign success', className: 'alert-success' });
  } catch (err) {
    notify({ mes: 'Sign failed', className: 'alert-danger' });
  }
}



// Autocomplete city, country
(async function createAutocomplete() {
  let countryArr2 = await getCountries();
  createAutocompleteJQ(await getCountries(), '#country');
  $('#country').on( "autocompleteselect", function( event, ui ) {
    let valueCountry = ui.item.label;
    let indexCountry = countryArr2.indexOf(valueCountry);
    indexCountry = ++indexCountry;
    console.log(indexCountry);
    var reqRoute = `/location/get-cities/${indexCountry}`;
    console.log(reqRoute);
    (async function () {
      createAutocompleteJQ(await getCities(reqRoute), '#city');
    })();
  });
}
)();