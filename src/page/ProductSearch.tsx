import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { ProductType } from '../type/Product';


type Props = {
    products : ProductType[],
    keyword:string
}

const ProductSearch = (props: Props) => {
  return (
    <div>
               <h2 className='text-center py-3'>Sản phẩm tìm kiếm với từ khóa "{props.keyword}" </h2>
            {/* <div className='grid grid-cols-4 mt-2 gap-4'>
                {props.products.map((product, index) => {
                    return (
                        <div className="group " key={index}>
                            <Link to={`/product/${product._id}`} className="no-underline">
                                <div className="card overflow-hidden" >
                                    <img src={product.img} className="card-img-top mt-3 group-hover:scale-105 duration-300" />
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-lg text-black">{product.name}</h5>
                                        <p className="card-text text-xl text-red-600 font-bold"> {`${product.price}`} <u>đ</u></p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div> */}
                 <div className="row">
                {props.products?.map((product,index)=>{
                    return(
                        <div className="col-lg-4 text-center" key={index}>
                        <div className="card border-0 bg-light mb-2">
                            <div className="card-body">
                            <img src={product.img} alt="" className='img-fluid'/>
                            </div>
                        </div>
                        <h6>{product.name}</h6>
                        <p>{product.price}</p>
                        <a href={`/products/${product._id }`}>Chi tiet</a>
                        </div>
                    )
                })}
               
                
            </div>
    </div>
  )
}

export default ProductSearch