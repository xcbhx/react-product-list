import './CategoryButton.css'

function CategoryButton({ category, onSelect }) {
  return (
    <div>
      <button className='CategoryButton' onClick={() => onSelect(category)}>
        {category}
      </button>
    </div>
  )
};


export default CategoryButton;