import styles from './profile.styles'
import templateUrl from './profile.template'

const controller = class {
  constructor (dataservice, userstatusservice) {
    this.dataservice = dataservice
    this.userstatusservice = userstatusservice
    this.profileInfo = ''
    this.setUserByName()
  }
  styles = styles
  setUserByName () {
    console.log(this.userstatusservice.credentials.username)
    this.dataservice.getUserByName(this.userstatusservice.credentials.username).then(value => {
      this.profileInfo = value
    })
  }
}

export const profile = {
  templateUrl,
  controller,
  controllerAs: 'profile'
}
