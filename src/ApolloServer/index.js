const {
  ApolloServer,
  gql,
} = require('apollo-server')
const {
  sellingProperties: sellingPropertiesData,
  sellingListData,
} = require('./__mocks/common-mocks')

const DataHandler = require('./functions/DataHandler')
const getSellingListByAddress = require('./functions/getSellingListByAddress')
const getSellingListByLatLngRange = require('./functions/getSellingListByLatLngRange')

const fs = require('fs')
const maskMapPointsData = JSON.parse(fs.readFileSync('src/ApolloServer/__mocks/mask-map-points.json'))

const typeDefs = gql`
  type SingleSellingProperty {
    id: String
    name: String
    phone: String
    address: String
    mask_adult: String
    mask_child: String
    updated: String
    available: String
    note: String
    custom_note: String
    website: String
    county: String
    town: String
    cunli: String
    service_periods: String
    lat: Float
    lng: Float
  }

  type Query {
    sellingProperties(county: String): [SingleSellingProperty]
    sellingListByAddress(address: String!): [SingleSellingProperty]
    sellingListByLatLng(lat: Float!, lng: Float!, range: Float): [SingleSellingProperty]
  }
`

const resolvers = {
  Query: {
    sellingProperties: (parent, args, context, info) => {
      const {
        county,
      } = args

      if(county) {
        return context.sellingList.filter(p => {
          return p.county.includes(county)
        })
      } else {
        return []
      }
    },

    sellingListByAddress: (parent, args, context, info) => {
      const {
        address,
      } = args

      return getSellingListByAddress(address, context.sellingList)
    },

    sellingListByLatLng: (parent, args, context, info) => {
      return getSellingListByLatLngRange(args, context.sellingList)
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    sellingList: DataHandler.formatData(maskMapPointsData)
  })
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})