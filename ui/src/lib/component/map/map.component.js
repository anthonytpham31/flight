import templateUrl from './map.template'

const controller = class {
  constructor (mapservice) {
    this.mapservice = mapservice
  }
  zoom = 7
  center = [35.5175, -86.5804]
  markers = []
  paths = []
    // add markers from an angular constant
  locations = {
    memphis: {
      latitude: 35.1495,
      longitude: -90.0490
    },
    nashville: {
      latitude: 36.1627,
      longitude: -86.7816
    },
    knoxville: {
      latitude: 35.9606,
      longitude: -83.9207
    }
  }
}

export const flightMap = {
  templateUrl,
  controller,
  controllerAs: '$mapCtrl'
}
