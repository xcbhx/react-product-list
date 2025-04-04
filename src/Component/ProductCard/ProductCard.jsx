import './ProductCard.css'

function ProductCard({ product, onAddToCart }) {
  return (
    <div key={product.id} className='ProductCard'>
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Description: {product.description}</p>
      <p>Units: {product.units}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  )
};

export default ProductCard;