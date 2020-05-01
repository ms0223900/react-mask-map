const {
  ApolloServer,
  gql,
} = require('apollo-server')
const {
  sellingProperties: sellingPropertiesData,
} = require('./__mocks/common-mocks')
const fs = require('fs')
const maskMapPoints = JSON.parse(fs.readFileSync('src/ApolloServer/__mocks/mask-map-points.json'))

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
  }

  type Query {
    sellingProperties(county: String): [SingleSellingProperty]
  }
`

const resolvers = {
  Query: {
    sellingProperties: (parent, args, context, info) => {
      const {
        county,
      } = args

      if(county) {
        return sellingPropertiesData.filter(p => {
          return p.county.includes(county)
        })
      } else {
        return []
      }
    },
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})