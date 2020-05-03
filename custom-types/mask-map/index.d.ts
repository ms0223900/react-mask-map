declare module "@mask-map" {
  interface LatLng {
    lat: number
    lng: number
  }
  
  interface SingleSellingPoint extends LatLng {
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
}