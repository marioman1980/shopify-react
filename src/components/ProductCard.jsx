const ProductCard = ({ product }) => {
  return (
    <h2><a href={`/products/${product.handle}`}>{ product.title }</a></h2>
  );
}

export default ProductCard;