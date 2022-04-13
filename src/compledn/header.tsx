import React from 'react'
import { CategoryType } from '../type/category'
import Danhmuc from './Danhmuc'
import Footer from './footer'
import Nav from './nav'
import Seach from './seach'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { getLocalstorage } from '../ultils/localStorage'

import 'react-toastify/dist/ReactToastify.css';
import { SubmitHandler, useForm } from 'react-hook-form'

type Props = {
 
  search: (keyword: string) => void
  categories: (keyword: string) => void
}


const   Header = (props: Props) => {
  
  const navigate = useNavigate()
    const logOut = () => {
        localStorage.removeItem('user');
        toast.success("Đã đăng xuất");
        setTimeout(() => {
            navigate('/singin')
        }, 1000);
    }
  return (
    <div className=''>
    <header>
   
   <nav className="navbar navbar-expand-lg   ">
<div className="container ">
<a className="navbar-brand" href="/"> Home</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon" />
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  
<Nav/>
<Seach onSearch ={props.search}/> 
<div className='ms-5 px-1'>
                    {getLocalstorage() ?
                        <div>
                            {getLocalstorage().user.role == 1 ?
                                <div className="">
                                   <p>{getLocalstorage().user.name}</p>
                                   <Link to="/admin">Admin</Link>
                                   <Link to="#" onClick={() => logOut()}>Đăngxuất</Link>
                                </div>
                                : <div className="">
                                    <p>{getLocalstorage().user.name}</p>    
                                    <div className="">
                                        <Link to="#" onClick={() => logOut()}>Đăngxuất</Link>
                                    </div>
                                </div>

                            }
                        </div>
                        : <Link to="/singin" className='text-white '>
                           
                            <p className="text-dark mt-1">Đăngnhập</p>
                        
                        </Link>
                    }

</div>
          

</div>
<Link to="/cart" className="mt-4 text-white">
                    <p><i className="fas fa-cart-arrow-down bg-black fa-2x pt-2 mx-auto" /> </p>
                </Link>
</div>
</nav>

</header>
<Danhmuc categories={props.categories}/>  
</div>
  )
}

export default Header