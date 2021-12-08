import axios from '../plugins/axios';

export async function signup() {
    try {
      const response = await axios.post(
        `/auth/signup`,
        JSON.stringify(
            {
            email: "kdp160575@gmail.com",
            password: "pwD5557gfJKOIuytg*&^",
            nickname: "kdp",
            first_name: "D",
            last_name: "M",
            phone: "063126547",
            gender_orientation: "male",
            city: "Kharkiv",
            country: "Ukrane",
            date_of_birth_day: 11,
            date_of_birth_month: 10,
            date_of_birth_year: 1989,
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