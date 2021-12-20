import axios from '../plugins/axios';

export async function getCountries() {
    try {
      const response = await axios.get(
        `/location/get-countries`,
      );
      // console.log(Object.values(response));
      return Object.values(response);
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }