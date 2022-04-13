import React from 'react' 
import { Link } from 'react-router-dom'
import { CategoryType } from '../type/category'
type DanhmucProps = {
    categories :CategoryType[]
}

const Danhmuc = ({categories}: DanhmucProps) => {
//    console.log(categories);

  return (
   
    <div className="product">
    <div className="container ">
        <div className="row py-5 ">
            <div className="col-lg-5 m-auto ">
                <h1 className='text-success'>Danh Mục Sản Phẩm</h1>
            </div>
        </div>
            <div className="row  text-center">

 
     {categories?.map((categorie,index)=>{
         return(
            <div className="col-lg-3 text-center" >
            <div className="card border-0 bg-light mb-2 align-items-center">
            <div className="card-body ">
            <a href={`/danh-muc/${categorie._id}`} > <img src="/src/img/cate4.JPG" alt="" className='img-fluid ms-1' /></a>
            <h6 className='mt-3'>{categorie.name}</h6>
        </div>
 </div>    
            </div>
            
         )

     })}
 
    
           
</div>             
            
    </div>
   
</div>
  )
}

export default Danhmuc