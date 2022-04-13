import React, { useEffect } from 'react'
import {useForm,SubmitHandler} from 'react-hook-form';
import {useNavigate,useParams} from 'react-router-dom';
import { read } from '../api/product';
import { CategoryType } from '../type/category';
import { ProductType } from '../type/Product';

type ProductEditProps = {
    onUpdate: (product: ProductType) => void
    onEdit: (product: ProductType) => void,
    categories: CategoryType[]
}
type FormInputs ={
  name:string,
  price:number,
  img:string,
  desc:string,
  category: string


}

const ProductEdit = (props: ProductEditProps) => {
    const {register,handleSubmit,formState:{errors},reset} = useForm<FormInputs>();
    const navigate = useNavigate();
    const {id} = useParams();


     useEffect(()=>{
         const getProduct  = async ()=>{
             const {data} = await read(id);
             reset(data);

         }
         getProduct();
     },[])
     const onSubmit :SubmitHandler<FormInputs> = data =>{
         console.log(data);
         props.onUpdate(data);
         navigate('/admin/product');
      
     }
  return (
   <form action="" onSubmit={handleSubmit(onSubmit)}>
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
  )
}

export default ProductEdit