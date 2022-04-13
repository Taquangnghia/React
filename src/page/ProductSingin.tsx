import React from 'react'
import Banner from '../compledn/Banner'
import Footer from '../compledn/footer'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { singin } from '../api/user'
import { addLocalstorage, getLocalstorage } from '../ultils/localStorage'
type Props = {}
type  FormSingin = {
  email:String,
  password:String
}


const ProductSingin = (props: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormSingin>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormSingin> = async data => {

      try {
          const { data: user } = await singin(data)
          addLocalstorage(user, () => {
              if (getLocalstorage().user.role == 1) {
                  toast.success("Đăng nhập thành công, vui lòng đợi giây lát");
                  setTimeout(function () {
                      navigate('/admin')
                  }, 2000)
              }
              else {
                  toast.success("Đăng nhập thành công, vui lòng đợi giây lát");
                  setTimeout(function () {
                      navigate('/')
                  }, 2000)
              }
          })
      } catch (error) {
          toast.error("Tài khoản hoặc mật khẩu không chính xác!")

      }

  }
  

  return (
    <div>
    
    <h1 className='text-center'>Đăng nhập</h1>
    <form className="container"onSubmit={handleSubmit(onSubmit)}   >
      <div className="mb-3 ">
        <label  className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('email',{required:true})} />
        {errors.email && <div className=" text-red-600">Không được để trống!</div>}
        
      </div>
      <div className="mb-3">
        <label  className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"{...register('password',{required:true})} />
        {errors.password && <div className=" text-red-600">Không được để trống!</div>}
        <a href="/singup">dang ky</a>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
  
    </form>

    
    <ToastContainer />
  </div>

  )
}

export default ProductSingin