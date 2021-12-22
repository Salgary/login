import axios from '../plugins/axios';

export async function getCountries() {
    try {
      const response = await axios.get(
        `/location/get-countries`,
      );
      // console.log(Object.values(response));
      // console.log(response);
      return Object.values(response);
      // return response;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }

  export async function getCities(route) {
    try {
      const response = await axios.get(
        route,
      );
      // console.log(Object.values(response));
      // console.log(response);
      return Object.values(response);
      // return response;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }