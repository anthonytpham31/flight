export const dataservice = class {
  constructor ($http) {
    this.$http = $http
    this.ipAddress = 'localhost:8000'
  }
  // --------------------------------------------------user services

  getUserByName (username) {
    return this.$http.get(`http://${this.ipAddress}/api/users/${username}`)
    .then((response) => {
      console.log('success getUsers', response.data)
      return response.data
    }, (error) => {
      console.log('failed getUsers', error.data)
    })
  }

  postUser (userObject) {
    return this.$http.post(`http://${this.ipAddress}/api/users`, userObject)
    .then((response) => {
      console.log('success postTweet', response.data)
      return response.data
    }, (error) => {
      console.log('failed postTweet', error.data)
    })
  }

  updateUser (username, userObject) {
    return this.$http.patch(`http://${this.ipAddress}/api/users/${username}`, userObject)
    .then((response) => {
      console.log('success updateUser', response.data)
      return response.data
    }, (error) => {
      console.log('failed updateUser', error.data)
    })
  }

  deleteUser (username) {
    return this.$http.delete(`http://${this.ipAddress}/api/users/${username}`)
    .then((response) => {
      console.log('success deleteUser', response.data)
      return response.data
    }, (error) => {
      console.log('failed deleteUser', error.data)
    })
  }

}
