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
      selectedNav: 'home-nav',
      event_register_type: null,
      frontendBannerImages: [
        "slide1.png",
        "slide2.png",
        "slide1.png",
        "slide2.png",
      ],
      lastviewedEvent: null,
      tkn_name: import.meta.env.VITE_SITE_TOKEN_NAME,
    }
  },
  getters: {
    //only used for state + other data transform variables
    isUserActivated: (state) => (state.logged_user.is_active == 1) ? true : false,
    //getViewRegisterForm: (state) => state.viewRegisterForm
  },
  actions: {
      //NAMING CONVENTION SEMANTICS:
      //fetch + function name
      async tryLoggingIn(params = {}){
        const url = import.meta.env.VITE_TRAQS_BACKEND_URL + 'authentication/login';
        var formParams = new FormData();
        
        Object.keys(params).forEach((field_name) => {
            formParams.append(field_name, params[field_name]);
        });

        return await axios.post(url, formParams).then(function (data) {
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
    async tryCheckAlreadyRegistered(params = {}){
      const url = import.meta.env.VITE_BASE_BACKEND_URL + 'v1/user/events/is_registered';
      let config = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          'Authorization': this.userToken
        }
      };

      return await axios.post(url, params, config).then(function (data) {
          return data;
      }).catch(function (error) {
          return error;
      });
    },//end fn
    async tryGetUserProfile(){
          const url = import.meta.env.VITE_TRAQS_BACKEND_URL + 'v1/user/me';
        
          let config = {
            headers: {
                'Authorization': this.userToken,
            }
          };

          return await axios.get(url, config).then(function (data) {
              return data;
          }).catch(function (error) {
              return error;
          });
    },
    async tryVerifyOTP(otp){
          const url = import.meta.env.VITE_TRAQS_BACKEND_URL + 'v1/verification';
          var formParams = new FormData();
          
          formParams.append('otp', otp);
          formParams.append('email', this.logged_user.email);

          return await axios.post(url, formParams).then(function (data) {
              return data;
          }).catch(function (error) {
              return error;
          });
    },
    async tryResendOTP(params){
          const url = import.meta.env.VITE_TRAQS_BACKEND_URL + 'v1/verification';
          var formParams = new FormData();
          
          Object.keys(params).forEach((field_name) => {
            formParams.append(field_name, params[field_name]);
          });

          return await axios.get(url, formParams).then(function (data) {
              return data;
          }).catch(function (error) {
              return error;
          });
    },


    async tryFetchEvents(params){
          const url = import.meta.env.VITE_BASE_BACKEND_URL + 'v1/public/events';
          var formParams = new FormData();
          
          Object.keys(params).forEach((field_name) => {
            formParams.append(field_name, params[field_name]);
          });

          return await axios.post(url, formParams).then(function (data) {
              return data;
          }).catch(function (error) {
              return error;
          });
    },

    async tryFetchEventDetails(eventid){
          const url = import.meta.env.VITE_BASE_BACKEND_URL + 'v1/public/events/details/' + eventid;
          var formParams = new FormData();
        
          return await axios.post(url, formParams).then(function (data) {
              return data;
          }).catch(function (error) {
              return error;
          });
    },
    async tryRegisterEvent(params = {}){
      const url = import.meta.env.VITE_BASE_BACKEND_URL + 'v1/user/events/register';
      let config = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          'Authorization': this.userToken
        }
      };

      return await axios.post(url, params, config).then(function (data) {
          return data;
      }).catch(function (error) {
          return error;
      });
    },
    async tryFetchAbout(fetch_type){
      const url = import.meta.env.VITE_BASE_BACKEND_URL + 'v1/public/about/' + fetch_type;
      let config = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
        }
      };

      return await axios.post(url, config).then(function (data) {
          return data;
      }).catch(function (error) {
          return error;
      });
    },//end fn
    async tryFetchFooterDetails(){
      const url = import.meta.env.VITE_BASE_BACKEND_URL + 'v1/public/footer-details';
      let config = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
        }
      };

      return await axios.post(url, config).then(function (data) {
          return data;
      }).catch(function (error) {
          return error;
      });
    }//end fn
  },
  persist: {
    storage: sessionStorage, // data in sessionStorage is cleared when the page session ends.
  },
})