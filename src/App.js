import './App.css';
import { useState } from 'react';
import data, { uniqueWords } from './data';
import CategoryButton from './Component/CategoryButton/CategoryButton';
import ProductCard from './Component/ProductCard/ProductCard';

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filterProducts = selectedCategory === 'All Categories'
    ? data
    : data.filter(product => product.category === selectedCategory);

  return (
    <div className="App">
      <div className='CategoryGrid'>
        {uniqueWords.map((category) => (
          <CategoryButton key={category} category={category} onSelect={handleCategorySelect} selectedCategory={selectedCategory} />
        ))}
        <CategoryButton key='all' category='All Categories' onSelect={handleCategorySelect} selectedCategory={selectedCategory} />
      </div>
      <div className='ProductGrid'>
        {filterProducts.map((product) => {
          return <ProductCard key={product.id} product={product}/>
        })}
      </div>
    </div>
  );
}

export default App;
