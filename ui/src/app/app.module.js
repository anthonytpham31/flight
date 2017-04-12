import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngMaterial from 'angular-material'
import ngMessages from 'angular-messages'
import uiRouter from 'angular-ui-router'

import flightMap from './map/map.module'
import apiUrl from './api.url'
import appComponent from './app.component.js'

import { createUser } from './component/createuser'
import { profile } from './component/profile'

import { dataservice } from './services/dataservice'
import { userstatusservice } from './services/userstatusservice'

// import { routes } from './app.routes'

export default
  angular
    .module('flight', [
      ngAria,
      ngAnimate,
      ngMaterial,
      ngMessages,
      uiRouter,

      flightMap
    ])
    .constant('apiUrl', apiUrl)
    .component('flightApp', appComponent)
    .component('createUser', createUser)
    .component('profile', profile)

    .service('dataservice', dataservice)
    .service('userstatusservice', userstatusservice)

    // .config(routes)
    .name
