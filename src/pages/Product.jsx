import { gql } from 'graphql-request';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import shopify from "../utils/shopify";

const Product = () => {

  const handle = useParams().handle;
  const [product, setProduct] = useState([]);

  const getProduct = async (handle) => {
    const query = gql`
      query getProduct($handle: String!) {
        product(handle: $handle) {
          id
          title
        }
      }
   `;
    const variables = { handle: handle };
    const data = await shopify(query, variables);
    setProduct(data.product);
  }

	useEffect(() => {
		getProduct(handle);
	}, [handle]);

  if (product) {
    console.log(product);
    return (
      <h1>{ product.title }</h1>
      );
    } else {
    console.log('404');
    return (
      <h1>404</h1>
    )
  }
}

export default Product;