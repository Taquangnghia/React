import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../compledn/header'
import Seach from '../compledn/seach'

import { ProductType } from '../type/Product'
import HomePage from './HomePage'

type ProductProps = {
  products:ProductType[]
}

const Product = ({products}: ProductProps) => {
  return (
    <div>
      <Seach/>
      <div>
            <h1 className=''></h1>
            <div className='row'>
                {products?.map((product ,index) => {
                    return(
                        <div className="col-3" key={index}>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                               <samp className='block'>{product.price}</samp>
                                <a href={`/products/${product._id}`} className="btn btn-primary">Chi tiet</a>
                            </div></div>
    
                    </div>
                    )
                })}
              

            
            </div>
            
        </div>


    </div>
  )
}

export default Product  