import { GraphQLClient } from 'graphql-request';

const shopify = async (query, variables) => {
  const endpoint = 'https://james-swanky.myshopify.com/api/2022-04/graphql.json'
  const token = '40ea0e18a2222ad95bac548f56799e22'
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'X-Shopify-Storefront-Access-Token': token,
    },
  })
  return await graphQLClient.request(query, variables)
}
export default shopify