export const mapservice = class {
  constructor ($http) {
    this.$http = $http
    this.apiUrl = 'localhost:8000'
  }

  getMarkerByCityName (name) {
    return this.$http.get(`${this.apiUrl}/location/name`, { params: { name } })
      .then(result => result.data)
  }
}
