import styles from './app.styles'
import templateUrl from './app.component.html'

const controller =
/* @ngInject */
  class {
    constructor (userstatusservice) {
      this.userstatusservice = userstatusservice
    }
    styles = styles
}

export const flight = {
  templateUrl,
  controller,
  controllerAs: 'app'
}
