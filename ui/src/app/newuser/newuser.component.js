import styles from './newuser.styles'
import templateUrl from './newuser.component.html'

/* @ngInject */
class NewUserController {
  constructor ($http, apiUrl) {
    this.$http = $http
    this.apiUrl = apiUrl
  }
  styles = styles
  username = ''
  password = ''
  firstName = ''
  lastName = ''
  email = ''
  phone = ''
  userCreds = ''
  passCreds = ''

  checkCreds () {
    const creds = {
      password: this.passCreds,
      username: this.userCreds
    }
    return creds
  }

  validateCreds () {
    console.log('button do work')
    this.dataservice.login(this.checkCreds())
    .then((response) => {
      if (response === true) {
        console.log('login success')
        this.userstatusservice.logIn(this.checkCreds())
        this.goto()
      } else {
        console.log('returned false, failed login')
        this.userstatusservice.logOut()
      }
    }, (error) => {
      console.log(error)
    })
  }

  makeUser () {
    const userInfo = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone
    }
    const credentials = {
      password: this.password,
      username: this.username
    }
    return {
      profile: userInfo,
      credentials: credentials
    }
  }

  getUserByName () {
    this.$http.get(this.apiUrl + `/users/` + this.username)
    .then((response) => {
      console.log('success getUsers', response.data)
      return response.data
    }, (error) => {
      console.log('failed getUsers', error.data)
    })
  }

  postUser () {
    this.$http.post(this.apiUrl + `/users`, this.makeUser())
    .then((response) => {
      console.log('success postTweet', response.data)
    }, (error) => {
      console.log('failed postTweet', error.data)
    })
  }

  updateUser (username, userObject) {
    return this.$http.patch(this.apiUrl + `/users/${username}`, userObject)
    .then((response) => {
      console.log('success updateUser', response.data)
      return response.data
    }, (error) => {
      console.log('failed updateUser', error.data)
    })
  }

  deleteUser (username) {
    return this.$http.delete(this.apiUrl + `/users/${username}`)
    .then((response) => {
      console.log('success deleteUser', response.data)
      return response.data
    }, (error) => {
      console.log('failed deleteUser', error.data)
    })
  }
}

export default {
  templateUrl,
  controller: NewUserController,
  controllerAs: '$newuserCtrl'
}
