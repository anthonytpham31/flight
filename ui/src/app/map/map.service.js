/* @ngInject */
class MapService {
  constructor ($http) {
    this.$http = $http
    this.apiUrl = 'localhost:8000'
  }

  getMarkerByCityName (name) {
    return this.$http
      .get(`http://${this.apiUrl}/location/name`, { params: { name } })
      .then(result => result.data)
  }

  getAvailableFlights () {
    return this.$http
    .get(`http://${this.apiUrl}/flights`)
  }
}

export default MapService
