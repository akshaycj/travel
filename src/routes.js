import Base from './Base';
import App from './App'
import Single from './SinglePage';
import Details from './Details.js';
import SinglePack from './SinglePack';
import Booking from './Booking';
import Login from './Login';
import Signup from './Signup';
import Home from './Home'
const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [
    {
        path: '/',
        component: Details
    },
    {
        path:'/package',
        component:Single
    },
    {
      path:'/details',
      component:Details
    },
    {
      path:'/pack',
      component:SinglePack
    }


  ]
};

export default routes;
