import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <div key={product.id} className='ProductCard'>
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Description: {product.description}</p>
      <p>Units: {product.units}</p>
    </div>
  )
};

export default ProductCard;