import { defineStore } from 'pinia'
import axios from 'axios';

export const useFrontendStore = defineStore('frontend', {
  state: () => {
    return { 
       viewRegisterForm: false
    }
  },
  getters: {
    //for Summary Data
    getViewRegisterForm: (state) => state.viewRegisterForm
  },
  actions: {
    //NAMING CONVENTION SEMANTICS:
    //fetch + function name
    async tryLoggingIn(params = {}){
        const url = import.meta.env.VITE_BASE_BACKEND_URL + 'v1/auth/login';
        console.log(url);
        let config = {
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
          }
        };

        return await axios.post(url, params, config).then(function (data) {
            return data;
        }).catch(function (error) {
            return error;
        });
  },
  },
  persist: {
    storage: sessionStorage, // data in sessionStorage is cleared when the page session ends.
  },
})