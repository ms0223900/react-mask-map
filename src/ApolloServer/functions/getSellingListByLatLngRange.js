const DataHandler = require('./DataHandler')

function getSellingListByLatLngRange(latLngRange, sellingList) {
  const {
    range=1000 //meter
  } = latLngRange

  const res = sellingList.filter(s => {
    const distance = DataHandler.calculateTwoLatLngToMeter(latLngRange, {
      lat: s.lat, lng: s.lng
    })
    if(distance <= range) {
      return true
    }
    return false
  })

  return res
}

module.exports = getSellingListByLatLngRange