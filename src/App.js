import { gql } from 'graphql-request';
import { useEffect, useState } from 'react';

import shopify from "./utils/shopify";

const App = () => {
  const getProduct = async (id) => {
    console.log('bar')
    const query = gql`
      query getProduct($handle: String!) {
        product(handle: $handle) {
          id
          title
        }
      }
   `;
    // const variables = { handle: id };
    const variables = { handle: id };
    const data = await shopify(query, variables);
    console.log(data);
  }

	useEffect(() => {
		getProduct('bangle-bracelet');
	}, []);  

  return (
    <h1>foo</h1>
  )
}

export default App;