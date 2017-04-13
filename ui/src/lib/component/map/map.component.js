import styles from './map.styles'
import templateUrl from './map.component.html'

const controller = class {
  constructor (mapservice, $state) {
    this.mapservice = mapservice
    this.$state = $state
  }
  styles = styles
  zoom = 7
  center = [35.5175, -86.5804]
  markers = []
  paths = []

  // constructor ($map, locations) {
  //   this.$map = $map
  //
  //   // add markers from an angular constant
  //   const { memphis, nashville, knoxville } = locations
  //   const markers = [memphis, nashville, knoxville]
  //
  //   markers.forEach(marker => this.addMarker(marker))
  //
  //   // add paths manually
  //   const paths = [
  //     [memphis, nashville, '#CC0099'],
  //     [nashville, knoxville, '#AA1100']
  //   ]
  //
  //   paths.forEach(args => this.addPath(...args))

    // add path from webservice
  //   mapservice.getMarkerByCityName('Chattanooga')
  //     .then(chattanooga => {
  //       this.addPath(knoxville, chattanooga, '#FF3388')
  //     })
  // }
  //
  // addMarker ({ latitude, longitude }) {
  //   this.markers.push({
  //     position: `[${latitude}, ${longitude}]`
  //   })
  // }
  //
  // addPath (a, b, color) {
  //   this.paths.push({
  //     path: `[[${a.latitude}, ${a.longitude}], [${b.latitude}, ${b.longitude}]]`,
  //     strokeColor: color,
  //     strokeOpacity: 1.0,
  //     strokeWeight: 3,
  //     geodesic: true
  //   })
  // }

}

export default {
  templateUrl,
  controller,
  controllerAs: 'map'
}
