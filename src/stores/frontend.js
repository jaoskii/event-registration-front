import { defineStore } from 'pinia'
import axios from 'axios';

export const useFrontendStore = defineStore('frontendstore', {
  state: () => {
    return { 
      viewRegisterForm: false,
      userToken: null,
      logged_user: {
        /* 'email': '',
        'name': '',
        'referral_code': '', */
      },
      frontendBannerImages: [
        "slide1.png",
        "slide2.png",
        "slide1.png",
        "slide2.png",
      ],
      tkn_name: import.meta.env.VITE_SITE_TOKEN_NAME
    }
  },
  getters: {
    //only used for state + other data transform variables
    //getViewRegisterForm: (state) => state.viewRegisterForm,
    //getViewRegisterForm: (state) => state.viewRegisterForm
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
    async tryRegister(params = {}){
          const url = import.meta.env.VITE_TRAQS_BACKEND_URL + 'v1/user';
          var formParams = new FormData();
          
          Object.keys(params).forEach((field_name) => {
            if(field_name != 'terms_agree'){
              formParams.append(field_name, params[field_name]);
            }//end if
          });

          return await axios.post(url, formParams).then(function (data) {
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