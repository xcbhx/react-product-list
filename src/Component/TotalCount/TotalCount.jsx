import './TotalCount.css'

function TotalCount({ categoryCount, productCount }) {

  return(
    <div className='TotalCount'>
      <h4>Category Total: {categoryCount}</h4>
      <h4>Product Total: {productCount}</h4>
    </div>
  )
}

export default TotalCount;