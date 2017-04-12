import flightMap from './map/map.module'
import apiUrl from './api.url'
import appComponent from './app.component.js'
import newUser from './newuser/newuser.module'
// import { createUser } from './component/createuser'
// import { profile } from './component/profile'

import { dataservice } from './services/dataservice'
import { userstatusservice } from './services/userstatusservice'

// import { routes } from './app.routes'

export default
  angular
    .module('flight', [
      'ngAria',
      'ngAnimate',
      'ngMaterial',
      'ngMessages',
      'ui.router',
      flightMap,
      newUser
    ])
    .constant('apiUrl', apiUrl)
    .component('flightApp', appComponent)

    // .component('createUser', createUser)
    // .component('profile', profile)
    //
    .service('dataservice', dataservice)
    .service('userstatusservice', userstatusservice)

    // .config(routes)
    .name
