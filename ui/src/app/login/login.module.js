import loginComponent from './login.component'
// import dataservice from './services/dataservice'
// import userstatusservice from './services/userstatusservice'

export default
  angular
    .module('flight.login')
    .component('login', loginComponent)
    // .service('dataservice', dataservice)
    // .service('userstatusservice', userstatusservice)
    .name
