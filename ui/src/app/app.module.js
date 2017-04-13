import angular from 'angular'

import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngMaterial from 'angular-material'
import ngMessages from 'angular-messages'
import uiRouter from 'angular-ui-router'

import apiUrl from './api.url'
import appComponent from './app.component.js'

import { createUser } from './component/createuser'
import { profile } from './component/profile'
// import { flightMap } from './component/map'

import { dataservice } from './services/dataservice'
import { userstatusservice } from './services/userstatusservice'

import { config } from './app.config'
import { routes } from './app.routes'
import { run } from './app.run'

export default
  angular
    .module('flight', [
      ngAria,
      ngAnimate,
      ngMaterial,
      ngMessages,
      uiRouter
    ])
    .constant('apiUrl', apiUrl)
    .component('flightApp', appComponent)

    // .component('flightMap', flightMap)
    .component('createUser', createUser)
    .component('profile', profile)

    .service('dataservice', dataservice)
    .service('userstatusservice', userstatusservice)

    .config(config)
    .config(routes)
    .run(run)
    .name
