import templateUrl from './app.component.html'

/* @ngInject */
class AppController {
  constructor ($log) {
    $log.debug('Login Injected Here')
  }
}

export default {
  templateUrl,
  controller: AppController,
  controllerAs: '$appCtrl'
}
