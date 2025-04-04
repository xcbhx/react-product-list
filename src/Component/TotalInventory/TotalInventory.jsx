import './TotalInventory.css';

function TotalInventory({ inventoryCount }) {
  return (
    <div className='TotalInventory'>
      <h3>Total Inventory: ${inventoryCount.toFixed(2)}</h3>
    </div>
  )
};

export default TotalInventory;