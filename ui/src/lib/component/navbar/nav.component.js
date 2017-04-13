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

  goToFeed () {
    this.$state.go('feed')
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
