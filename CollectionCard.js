import React from 'react'
import ethereum from '../src/assets/weth.png'
import './collectionCard.css'


const CollectionCard = ( {id , name , traits , image} ) => {
  return (
    <div className='collectionCard'>
        <img src={image} alt="" />
        <div className="details">
          <div className="name">
            {name}
        </div> 
        <div className="id">•#{id}</div>
        <div className="priceConatiner">
            <img src={ethereum} className="wethImage" alt="" />
            <div className="price">{traits[0]?.value}</div>
        </div>
        </div>

        
    </div>
  )
}

export default CollectionCard