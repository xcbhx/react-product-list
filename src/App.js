import './App.css';
import { uniqueWords } from './data';
import CategoryButton from './CategoryButton';

function App() {
  return (
    <div className="App">
      <h1>Categories:</h1>
      <div>
        {uniqueWords.map((category) => (
          <CategoryButton key={category} category={category} />
        ))}
        <CategoryButton key='all' category='All Categories' />
      </div>
    </div>
  );
}

export default App;
