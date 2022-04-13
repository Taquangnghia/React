import React from 'react'
import { ProductType } from '../type/Product'
import { Link } from 'react-router-dom';
type ProductMangerProps = {
    product :ProductType[];
    onRemove : (_id:number)=>void;
}

const ProductManger = ({product,onRemove}: ProductMangerProps) => {
  return (
    <div>
        <h1 className='my-4 text-center'>Quan lys snp</h1>
        <table className='table table-borderd'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ten sp</th>
                    <th>gia</th>
                  
                    <th>Thông tin</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {product?.map((product,index)=>{
                return(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
              
                        <td>{product.desc}</td>
                        <td>
                            <button className='btn btn-danger' onClick={()=> onRemove(product._id)}>Xoa</button>
                            <a href={`/admin/product/${product._id}/edit`}>Sua</a>
                        </td>
                    </tr>
                )
            })}
            <td className='bg-black'>
            <Link to="/admin/product/add" className='no-underline text-white'>Thêm mới</Link>
            </td>
                
            </tbody>
        </table>

    </div>
  )
}

export default ProductManger