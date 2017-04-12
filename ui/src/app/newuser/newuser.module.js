import newuserComponent from './newuser.component'
// import dataservice from './services/dataservice'
// import userstatusservice from './services/userstatusservice'

export default
  angular
    .module('flight.newuser')
    .component('newUser', newuserComponent)
    // .service('dataservice', dataservice)
    // .service('userstatusservice', userstatusservice)
    .name
