import './App.css';
import { useState, useMemo } from 'react';
import data, { uniqueWords } from './data';
import CategoryButton from './Component/CategoryButton/CategoryButton';
import ProductCard from './Component/ProductCard/ProductCard';
import TotalCount from './Component/TotalCount/TotalCount';
import TotalUnits from './Component/TotalUnits/TotalUnits';
import TotalInventory from './Component/TotalInventory/TotalInventory';
import Cart from './Component/Cart/Cart';

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [shoppingCart, setShoppingCart] = useState([]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  
  const handleShoppingCart = (product) => {
    setShoppingCart(prevCart => {
      const exisitingProduct = prevCart.find(item => item.id === product.id);

      if (exisitingProduct) {
        return prevCart.map(item => 
          item.id === product.id
            ? {...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1}];
      }
    });
  };

  const filterProducts = selectedCategory === 'All Categories'
    ? data
    : data.filter(product => product.category === selectedCategory);

  const totalUnits = filterProducts.reduce((sum, product) => sum + product.units, 0);
  
  const totalInventoryValue = useMemo(() => {
    const products = selectedCategory === 'All Categories'
      ? data
      : data.filter(product => product.category === selectedCategory);
    
    return products.reduce((sum, product) => {
      const priceString = product.price.replace(/[^0-9.]/g, '');
      const price = parseFloat(priceString) || 0;
      const units = parseInt(product.units) || 0;
      return sum + (price * units);
    }, 0);
  }, [selectedCategory]);


  return (
    <div className="App">
      <div className='CategoryGrid'>
        {uniqueWords.map((category) => (
          <CategoryButton key={category} category={category} onSelect={handleCategorySelect} selectedCategory={selectedCategory} />
        ))}
        <CategoryButton key='all' category='All Categories' onSelect={handleCategorySelect} selectedCategory={selectedCategory} />
      </div>

      <TotalCount 
        categoryCount={uniqueWords.length}
        productCount={filterProducts.length}
      />
    
      <TotalUnits countUnits={totalUnits} />
      <TotalInventory inventoryCount={totalInventoryValue} />

      <Cart shoppingCart={shoppingCart} />

      <div className='ProductGrid'>
        {filterProducts.map((product) => {
          return (
            <ProductCard 
            key={product.id} 
            product={product}
            onAddToCart={handleShoppingCart}
            />
          );
        })}
      </div>

    </div>
  );
}

export default App;
