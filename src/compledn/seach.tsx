import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { search } from '../api/product'
import { SubmitHandler, useForm } from 'react-hook-form'

type Props = {
    onSearch: (keyword: string) => void
}
type FormInputs = {
    q: string
}

const Seach = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onSearch(data.q);
        navigate(`/search?q=${data.q}`)

    }

  

  return (
    <div>
    <form className="d-flex px-5" onSubmit={handleSubmit(onSubmit)} >
    <input className="form-control ms-5" type="search" placeholder="Search" aria-label="Search" {...register("q")} />
    <input type="submit" value="Tìm kiếm" className="border-2 max-h-10 text-white px-3 hover:text-[#39ebd07a]" />
 
            
          
  </form>
  
   </div>
  )
}

export default Seach