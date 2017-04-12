import flightMap from './map/map.module'
import apiUrl from './api.url'
import appComponent from './app.component.js'

import { dataservice } from 'services/dataservice'
import { userstatusservice } from 'services/userstatusservice'

import { routes } from './app.routes'

export default
  angular
    .module('flight', [
      'ngAria',
      'ngAnimate',
      'ngMaterial',
      'ngMessages',
      'ui.router',

      flightMap
    ])
    .constant('apiUrl', apiUrl)
    .component('flightApp', appComponent)

    .service('dataservice', dataservice)
    .service('userstatusservice', userstatusservice)

    .config(routes)
    .name
