import { defineStore } from 'pinia'
import axios from 'axios';

export const useDashboardStore = defineStore('dashboardStore', {
  state: () => {
    return { 
      adminToken: null,
      logged_admin: {
        /* 'email': '',
        'name': '',
        'referral_code': '', */
      },
      tkn_name: import.meta.env.VITE_SITE_TOKEN_NAME_ADMIN,
    }
  },
  getters: {
    //only used for state + other data transform variables

  },
  actions: {
    //NAMING CONVENTION SEMANTICS:
    //fetch + function name
    async tryAddEventDetail(params = {}){
      const url = import.meta.env.VITE_BASE_BACKEND_URL + 'v1/admin/event/add_detail';
      
      return await axios.post(url, params).then(function (data) {
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