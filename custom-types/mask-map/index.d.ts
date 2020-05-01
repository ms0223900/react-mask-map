declare module "@mask-map" {
  type LatLng = [number, number]
  
  interface SingleSellingProperty {
    id: string
    name: string
    phone: string
    address: string
    mask_adult: string
    mask_child: string
    updated: string
    available: string
    note: string
    custom_note: string
    website: string
    county: string
    town: string
    cunli: string
    service_periods: string
  }

  interface SingleFeatureData {
    type: string
    properties: SingleSellingProperty
    geometry: {
      type: string
      coordinates: LatLng
    }
  }
}