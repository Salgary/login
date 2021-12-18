import axios from '../plugins/axios';

export async function signup(inputEmailSign, inputPasswordSign, inputNickname, inputFirstName, inputLastName, inputPhone, inputGender, inputCity, inputCountry, inputBirthDay, inputBirthMonth, inputBirthYear) {
    try {
      const response = await axios.post(
        `/auth/signup`,
        JSON.stringify(
            {
              email:inputEmailSign,
              password:inputPasswordSign,
              nickname:inputNickname,
              first_name:inputFirstName,
              last_name:inputLastName,
              phone:inputPhone,
              gender_orientation:inputGender,
              city:inputCity,
              country:inputCountry,
              date_of_birth_day:inputBirthDay, date_of_birth_month:inputBirthMonth, date_of_birth_year:inputBirthYear
            // email: "kdp160575@gmail.com  //sign@mail.ru",
            // password: "pwD5557gfJKOIuytg*&^"  //pwD5557gfJKOIuytg,
            // nickname: "kdp",
            // first_name: "D",
            // last_name: "M",
            // phone: "063126547",
            // gender_orientation: "male",
            // city: "Kharkiv",
            // country: "Ukrane",
            // date_of_birth_day: 11,
            // date_of_birth_month: 10,
            // date_of_birth_year: 1989,
         }
         ),
      );
  
      console.log(response);
      return response.data;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }