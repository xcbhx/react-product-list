
function Cart({ shoppingCart }) {
  return (
    <div>
      <h3>🛒Shopping Cart</h3>
      {shoppingCart.length === 0 ? (
        <p>Your cart is empty.</p>
      ): (
        shoppingCart.map((product) => (
          <div key={product.id}>
            <p>{product.name} - {product.price} ⌇ Qty: {product.quantity}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Cart;