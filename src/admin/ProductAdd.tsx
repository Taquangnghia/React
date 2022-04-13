import React from 'react'
import { useForm,SubmitHandler} from 'react-hook-form';
import { ProductType } from '../type/Product';
import {useNavigate} from 'react-router-dom';
import{CategoryType} from "../type/category";


type ProductAddProps = {
    onAdd:(product:ProductType)=>void;
    categories: CategoryType[],
}
type FormInputs = { 
    name:string,
    price:number,
    img:string,
    desc:string,
    category: string
}

const ProductAdd = (props: ProductAddProps) => {
    const navigate = useNavigate();

    const {register,handleSubmit,formState:{errors}} = useForm<FormInputs>();
    const onSbumit :SubmitHandler<FormInputs> = (data)  =>{
          
        props.onAdd(data);
        navigate('/admin/product');
       
    }

    
  return (
   <div>
  <h2>Themsp</h2>
  <div>
      <form action="" onSubmit={handleSubmit(onSbumit)}>
   
<div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Ten sp</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="ten sp"{...register('name',{required:true})} />
    {errors.name && <div className=" text-red-600">Không được để trống!</div>}
    <label htmlFor="exampleFormControlInput1" className="form-label">gia sp</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="gia sp" {...register('price',{required:true})}/>
    {errors.price && <div className=" text-red-600">Không được để trống!</div>}
    <label htmlFor="exampleFormControlInput1" className="form-label">anh sp</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="anh sp"{...register('img',{required:true})} />
    {errors.img && <div className=" text-red-600">Không được để trống!</div>}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">Noi dung sp</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} {...register('desc',{required:true})}/>
    {errors.desc && <div className=" text-red-600">Không được để trống!</div>}
  </div>
  
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">Danh muc</label>
    <select className="" id="" {...register('category')}>
      {props.categories?.map(item => <option key={item._id} value={item._id}>{item.name}</option>)}

      
    </select>
  </div>
</div>

    <button type='submit'>Them</button>
    
    </form>
  </div>
</div>


  )
}

export default ProductAdd