import { useForm,SubmitHandler} from 'react-hook-form';
import { ProductUser } from '../type/user';
import {useNavigate} from 'react-router-dom'
import Footer from '../compledn/footer';
import { singup } from '../api/user';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
type Props = {
    
}
type FormSingup = {
    name:String,
    email:String,
    password:String,
    role:number

}
const ProductSingup = (props: Props) => {
    const navigate = useNavigate();
    const {register,handleSubmit,formState:{errors}} = useForm<FormSingup>();
    const onSbumit :SubmitHandler<FormSingup> = data  =>{ 
      console.log(data);
     singup(data)
     .then(res=>{
      toast.success("Dang ky thanh cong");
      setTimeout(function(){
        navigate('/singin')
      },2000)
     })
   .catch(res=>("dang ky that bai"))
        
       
    }
  return (
<div>
  <h1 className='mt-10 text-center'>Đăng Ký</h1>
  <form className="container mt-5" onSubmit={handleSubmit(onSbumit)}>
    <div className="mb-3 ">
    <label  className="form-label">Name</label>
    <input type="" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('name',{required:true})} />
    {errors.name && <div className=" text-red-600">Không được để trống!</div>}
      <label  className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('email',{required:true})} />
      {errors.email && <div className=" text-red-600">Không được để trống!</div>}
    </div>
    <div className="mb-3">
      <label  className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" {...register('password',{required:true})} />
      {errors.password && <div className=" text-red-600">Không được để trống!</div>}
    </div>
    <input type="radio" {...register('role')} defaultValue={0} checked hidden />
    

    <button type="submit" className="btn btn-primary">Submit</button>

  </form>
  <ToastContainer />
</div>



  )
}
export default ProductSingup