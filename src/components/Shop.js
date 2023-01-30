import '../styles/Shop.css';
import ProductCard from './ProductCard';

function Shop({ products }) {
  if (!products) return <div className="Shop--loading">Loading...</div>;

  const productCards = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return <div className="Shop">{productCards}</div>;
}

export default Shop;
