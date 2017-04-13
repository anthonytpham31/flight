export const mapservice = class {
  constructor ($http, $interval) {
    this.$http = $http
    this.$interval = $interval
    this.apiUrl = 'localhost:8000'
  }
// , { params: { name } }; this was inside .get before changing everything
  getMarkerByCityName (name) {
    return this.$http
      .get(`${this.apiUrl}/location/${name}`)
      .then(result => result.data)
  }
}
