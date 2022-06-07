import { gql } from 'graphql-request';
import { useEffect, useState } from 'react';

import shopify from "../utils/shopify";
import ProductCard from '../components/ProductCard';

const Home = () => {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const query = gql`
      query getProducts {
        products(first: 10) {
          edges {
            node {
              id
              title
              handle
            }
          }
        }
      }
   `;
   const data = await shopify(query, {});
   setProducts(data.products.edges);
  }

	useEffect(() => {
		getProducts();
	}, []);

  return (
    <div>
      <h1>Home</h1>
      { products.map( ( product ) => (
        <ProductCard product={ product.node }/>
      ))}
    </div>
  );
};

export default Home;