const earthRadius = 6378.137

class DataHandler {
  static formatData(rawData) {
    return rawData.features.map(d => {
      return ({
        ...d.properties,
        lat: d.geometry.coordinates[0],
        lng: d.geometry.coordinates[1],
      })
    })
  }

  static convertDegToRad(degree) {
    return degree * Math.PI / 180
  }

  static calculateTwoLatLngToMeter(latLng1, latLng2) {
    const lat1Rad = this.convertDegToRad(latLng1.lat)
    const lat2Rad = this.convertDegToRad(latLng2.lat)
    const xRad = this.convertDegToRad(latLng1.lat - latLng2.lat)
    const yRad = this.convertDegToRad(latLng1.lng - latLng2.lng)

    const distanceRad = Math.asin(
      Math.sqrt(
        Math.pow(Math.sin(xRad / 2), 2) + 
        Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.pow(Math.sin(yRad / 2), 2)
      )
    )

    let distanceMeter = distanceRad * earthRadius * 2 * 1000 //meter
    distanceMeter = Math.round(distanceMeter * 10000) / 10000
    return distanceMeter
  }
}

module.exports = DataHandler

