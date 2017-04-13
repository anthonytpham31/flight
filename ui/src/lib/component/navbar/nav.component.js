import styles from './nav.styles'
import templateUrl from './nav.template'

const controller = class {
  constructor (userstatusservice, $state) {
    this.userstatusservice = userstatusservice
    this.$state = $state
  }

  goToProfile () {
    this.$state.go('profile')
  }

  goToFlights () {
    this.$state.go('flights')
  }

  goToLogin () {
    this.$state.go('home')
  }

  logOut () {
    this.userstatusservice.logOut()
    this.goToLogin()
  }
  styles = styles
}
export const navBar = {
  templateUrl,
  controller,
  controllerAs: 'navBar'
}
