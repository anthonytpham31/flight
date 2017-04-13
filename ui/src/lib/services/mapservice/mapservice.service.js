export const mapservice = class {
  constructor ($http) {
    this.$http = $http
    this.ipAddress = 'localhost:8000'
  }

  getMarkerByCityName (name) {
    return this.$http.get(`${this.ipAddress}/location/name`, { params: { name } })
      .then((response) => {
        console.log('success')
        return response.data
      }, (error) => {
        console.log('failed', error.data)
      })
  }
}
