import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import EventsView from '../views/EventsView.vue'
import EventDetails from '../views/EventDetails.vue'
import EventRegistration from '../views/EventRegistration.vue'

var tokenName = import.meta.env.VITE_SITE_TOKEN_NAME;

function requireSecureToken(to, from, next) {
  var isAuthenticated = false;
  //this is just an example. You will have to find a better or 
  // centralised way to handle you sessionStorage data handling 
  if (sessionStorage.getItem(tokenName)) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  if (isAuthenticated) {
    next(); // allow to enter route
  } else {
    next('/login'); // go to '/login';
  }
} //end fn

function checkTokenAvailability(to, from, next) {
  var isAuthenticated = false;
  //this is just an example. You will have to find a better or 
  // centralised way to handle you sessionStorage data handling 
  
  if (sessionStorage.getItem(tokenName) != null) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  if (!isAuthenticated) {
    next(); // go to '/login';
  } else {
    next('/'); // allow to enter route
  }
} //end fn

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      beforeEnter: checkTokenAvailability,
      component: LoginView
    },
    {
      path: '/',
      name: 'home',
      //beforeEnter: requireSecureToken,
      component: HomeView
    },
    {
      path: '/events',
      name: 'event-listing',
      //beforeEnter: requireSecureToken,
      component: EventsView
    },
    {
      path: '/event/details/:eventid',
      name: 'event-details',
      //beforeEnter: requireSecureToken,
      component: EventDetails
    },
    {
      path: '/event/register/:eventid',
      name: 'event-registration',
      //beforeEnter: requireSecureToken,
      component: EventRegistration
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
