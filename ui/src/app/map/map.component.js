import templateUrl from './map.template.html'

/* @ngInject */
class MapController {
  zoom = 7
  center = [35.5175, -86.5804]
  markers = []
  paths = []

  constructor ($map, $interval) {
    this.$map = $map
    this.$interval = $interval
    this.flightsInfo = ''
    // this.setFlights()

    // Old Constructor Code for Placeholder Flights ========================
    // add markers from an angular constant
    // const { memphis, nashville, knoxville } = locations
    // const markers = [memphis, nashville, knoxville]
    //
    // markers.forEach(marker => this.addMarker(marker))
    //
    // // add paths manually
    // const paths = [
    //   [memphis, nashville, '#CC0099'],
    //   [nashville, knoxville, '#AA1100']
    // ]
    //
    // paths.forEach(args => this.addPath(...args))
    //
    // // add path from webservice
    // $map.getMarkerByCityName('Chattanooga')
    //   .then(chattanooga => {
    //     this.addPath(knoxville, chattanooga, '#FF3388')
    //   })
    this.$interval(() => {
      $map.getAvailableFlights()
      .then((value) => {
        this.flightsInfo = value
        console.log(value)
      })
    }, 5000)
  }

  addMarker ({ latitude, longitude }) {
    this.markers.push({
      position: `[${latitude}, ${longitude}]`
    })
  }

  addPath (a, b, color) {
    this.paths.push({
      path: `[[${a.latitude}, ${a.longitude}], [${b.latitude}, ${b.longitude}]]`,
      strokeColor: color,
      strokeOpacity: 1.0,
      strokeWeight: 3,
      geodesic: true
    })
  }
  // setFlights () {
  //   this.$map.getAvailableFlights()
  //   .then(value => {
  //     this.flightsInfo = value
  //     console.log(value)
  //   })
  // }
}

export default {
  templateUrl,
  controller: MapController,
  controllerAs: '$mapCtrl'
}
