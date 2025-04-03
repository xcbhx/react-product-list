import './App.css';
import data, { uniqueWords } from './data';
import CategoryButton from './Component/CategoryButton/CategoryButton';
import ProductCard from './Component/ProductCard/ProductCard';

function App() {
  return (
    <div className="App">
      <div className='CategoryGrid'>
        {uniqueWords.map((category) => (
          <CategoryButton key={category} category={category} />
        ))}
      </div>
      <div className='ProductGrid'>
        {data.map((product) => {
          return <ProductCard key={product.id} product={product}/>
        })}
      </div>
    </div>
  );
}

export default App;
