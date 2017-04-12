/* @ngInject */
export const dataservice = class {
  constructor ($http, apiUrl) {
    this.$http = $http
    this.apiUrl = apiUrl
  }
  // --------------------------------------------------user services

  getUserByName (username) {
    return this.$http.get(`http://${this.apiUrl}/users/${username}`)
    .then((response) => {
      console.log('success getUsers', response.data)
      return response.data
    }, (error) => {
      console.log('failed getUsers', error.data)
    })
  }

  postUser (userObject) {
    return this.$http.post(`http://${this.apiUrl}/users`, userObject)
    .then((response) => {
      console.log('success postTweet', response.data)
      return response.data
    }, (error) => {
      console.log('failed postTweet', error.data)
    })
  }

  updateUser (username, userObject) {
    return this.$http.patch(`http://${this.apiUrl}/users/${username}`, userObject)
    .then((response) => {
      console.log('success updateUser', response.data)
      return response.data
    }, (error) => {
      console.log('failed updateUser', error.data)
    })
  }

  deleteUser (username) {
    return this.$http.delete(`http://${this.apiUrl}/users/${username}`)
    .then((response) => {
      console.log('success deleteUser', response.data)
      return response.data
    }, (error) => {
      console.log('failed deleteUser', error.data)
    })
  }

}
