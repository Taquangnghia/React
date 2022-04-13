import React,{ useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom';
import { cateProduct } from '../api/category';
import { CategoryType } from '../type/category';
import { ProductType } from '../type/Product'




type ProductListProps = {
    products:ProductType[];
    categories :CategoryType[]

}

const ProductList =({products}: ProductListProps) =>{
    const[product,setProduct]= useState<ProductType[]>([]);
    const {id} = useParams();
    useEffect(()=>{
        const getProduct = async ()=>{
            const {data} = await cateProduct(id)
            setProduct(data.product)
        }
        getProduct();
    },[])
    return (
        // <div>
        //     <h1 className=''> 22 viet </h1>
        //     <div className='row'>
        //         {products?.map((product,index) => {
        //             return(
        //                 <div className="col-3" key={index}>
        //                 <div className="card" style={{ width: '18rem' }}>
        //                     <img src="..." className="card-img-top" alt="..." />
        //                     <div className="card-body">
        //                         <h5 className="card-title">{product.name}</h5>
        //                        <samp className='block'>{product.price}</samp>
        //                         <a href={`/product/${product.id}`} className="btn btn-primary">Chi tiet</a>
        //                     </div>
                            
        //                     </div>
                     
        //             </div>
                    
        //             )
        //         })}
              

            
        //     </div>
            
        // </div>
        
        <div className="product">
        <div className="container">
            <div className="row py-5 ">
                <div className="col-lg-5 m-auto text-center">
                    <h1 className='text-warning'>Sản phẩm</h1>
                </div>
            </div>
            <div className="row">
                {products?.map((product,index)=>{
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

    </div>



    )
}

export default ProductList