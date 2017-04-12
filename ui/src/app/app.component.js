import templateUrl from './app.component.html'

/* @ngInject */
class AppController {
  constructor (userstatusservice) {
    this.userstatusservice = userstatusservice
  }
}

export default {
  templateUrl,
  controller: AppController,
  controllerAs: '$appCtrl'
}
