export const dataservice = class {
  constructor ($http) {
    this.$http = $http
    this.ipAddress = 'localhost:8000'
  }
  // --------------------------------------------------user services

  getUserByName (username) {
    return this.$http.get(`http://${this.ipAddress}/users/${username}`)
    .then((response) => {
      console.log('success getUsers', response.data)
      return response.data
    }, (error) => {
      console.log('failed getUsers', error.data)
    })
  }

  postUser (userObject) {
    return this.$http.post(`http://${this.ipAddress}/users`, userObject)
    .then((response) => {
      console.log('success postUser', response.data)
      return response.data
    }, (error) => {
      console.log('failed postUser', error.data)
    })
  }

  updateUser (username, userObject) {
    return this.$http.patch(`http://${this.ipAddress}/users/@${username}`, userObject)
    .then((response) => {
      console.log('success updateUser', response.data)
      return response.data
    }, (error) => {
      console.log('failed updateUser', error.data)
    })
  }

  deleteUser (username) {
    return this.$http.delete(`http://${this.ipAddress}/users/@${username}`)
    .then((response) => {
      console.log('success deleteUser', response.data)
      return response.data
    }, (error) => {
      console.log('failed deleteUser', error.data)
    })
  }

  login (credentials) {
    return this.$http.post(`http://${this.ipAddress}/validate/login`, credentials)
    .then((response) => {
      console.log('success login', response.data)
      return response.data
    }, (error) => {
      console.log('failed login', error.data)
    })
  }
}
