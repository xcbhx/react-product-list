import './CategoryButton.css'

function CategoryButton({ category, onSelect, selectedCategory }) {
  const isActive = category === selectedCategory;

  return (
    <div>
      <button className={`CategoryButton ${isActive ? 'active' : ''}`} 
        onClick={() => onSelect(category) }>
        {category}
      </button>
    </div>
  )
};


export default CategoryButton;