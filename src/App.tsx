import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Weblayout from './page/weblayout' 
import "bootstrap/dist/css/bootstrap.min.css"
import { ProductType } from './type/Product'
import { create, getOne, list, remove, search, update } from './api/product';
import Product from './page/Product'
import HomePage from './page/HomePage'
import adminlayout from './admin/adminlayout'
import Adminlayout from './admin/adminlayout'
import Dasboard from './page/Dasboard'
import ProductManger from './admin/ProductManger'
import ProductAdd from './admin/ProductAdd'
import ProductEdit from './admin/ProductEdit'
import ProductSingup from './page/ProductSingup'
import { ProductUser } from './type/user'
import { singup } from './api/user'
import ProductSingin from './page/ProductSingin'
import Vidu from './page/vidu'
import ProductDetail from './page/ProductDetail'
import Danhmuc from './compledn/Danhmuc'
import { createCate, listCate, removeCate } from './api/category'
import DanhMuc from './page/DanhMuc'
import "antd/dist/antd.css"
import PrivateRoute from './admin/PrivateRoute'
import User from './admin/User'
import {listUser} from './api/user'
import Category from './admin/Category'
import { CategoryType } from './type/category'
import ProductSearch from './page/ProductSearch'
import Cart from './page/Cart'
import { toast ,ToastContainer} from 'react-toastify'
import { addToCart, decrease, increase, removeCart } from './ultils/Cart'



function App() { 
  const [isLoading,setIsLoading] = useState(false);
  const [product,setProduct] = useState<ProductType[]>([]) ;
  const [user,setUsers] = useState<ProductUser[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [searchProduct, setsearchProduct] = useState<ProductType[]>([]);
  const [cart, setCart] = useState<ProductType[]>([]);
  const [keyword, setKeyword] = useState<string>();
  useEffect(()=>{ 
    const getProduct = async ()=>{
      const {data}=  await list();
     
      setProduct(data);
    };
    getProduct();

  
  /// danh muc
  const getCategory = async () => {
    const { data } = await listCate();
 
    setCategories(data)
  }
  getCategory()
  // user
  const getUser = async () => {
    const { data } = await listUser();
  
    setUsers(data)
  }
  getUser()

}, [])

  
  const onHandleRemove = (id:number)=>{
    // cal api xao sp
    remove(id);
    
    // render
   setProduct(  product.filter(item => item._id != id))  
  }
  
  /// add
  const onHandleAdd = async(product:any)=>{
    const {data} = await create(product);
    setProduct([...product,data])
  }
  // update
  const onHandleUpdate = async (product: ProductType) => {
    const { data } = await update(product);
    setProduct(product.map(item => item._id == data._id ? data : item));
  }
  // search 
  const onhandleSearch = async  (keyword:string) =>{
    const {data}  = await search(keyword)
    setsearchProduct(data)
    setKeyword(keyword)
  }
  // cart 
  const onHandleAddToCart = async (id: number) => {
    const { data } = await getOne(id);
    addToCart({ ...data, quantity: 1 }, () => {
      toast.success(`Đã thêm ${data.name} vào giỏ hàng!`)
    })
  }
  const onHandleIncrease = (id: number) => {
    increase(id, () => {
      setCart(JSON.parse(localStorage.getItem('cart') as string))
    })
  }
  const onHandleDecrease = (id: number) => {
    decrease(id, () => {
      setCart(JSON.parse(localStorage.getItem('cart') as string))
    })
  }
  const onHandleRemoveCart = (id: number) => {
    removeCart(id, () => {
      setCart(JSON.parse(localStorage.getItem('cart') as string))
    })
  }
  // category
  const onHandleAddCate = async (product: any) => {
    const { data } = await createCate(product);
    setCategories([...categories, data])
  }
  const onHandleRemoveCate = (id: number) => {
    const confirm = window.confirm('Bạn có muốn xóa không?');
    if (confirm) {
      removeCate(id);
      setCategories(categories.filter(item => item._id != id))
    }

  }
  


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Weblayout categories={categories}  searchProduct={onhandleSearch} />} >
        <Route index element={<HomePage product ={product}></HomePage> } />
        <Route  path='vidu' element={<Vidu></Vidu>}/>
        <Route  path='danh-muc/:id' element={<DanhMuc categories={categories}/>}/>
        <Route path='search' element={<ProductSearch products={searchProduct} keyword={keyword}></ProductSearch>}/>
      
        <Route  path='products'>
          <Route  index element={<Product  products ={product} />}/>
        <Route  path=':id' element={<ProductDetail  onAddToCart={onHandleAddToCart}></ProductDetail>}/>
        </Route>
           <Route path='cart' element={<Cart onIncrease={onHandleIncrease} onDecrease={onHandleDecrease} onRemoveCart={onHandleRemoveCart}></Cart>} /> 
        </Route>
        <Route  path='singup' element={<ProductSingup />}/>
            <Route  path='singin' element={<ProductSingin/>}/>
        <Route path='/admin' element={<PrivateRoute> <Adminlayout/> </PrivateRoute>} >
          <Route  path="dashboard"  element={<Dasboard></Dasboard>} />
          <Route  path='product'>
            <Route  index element={<ProductManger product={product}  onRemove={onHandleRemove}></ProductManger>} />
            <Route  path=':id/edit' element={<ProductEdit onUpdate={onHandleUpdate} categories={categories}></ProductEdit>}/>
            <Route path='add' element={<ProductAdd onAdd={onHandleAdd} categories={categories} ></ProductAdd>}/> 
          </Route>
          <Route path='category'>
            <Route index element={<Category  onAddCate={onHandleAddCate} categories={categories} onRemoveCate={onHandleRemoveCate} />} />
          </Route>
          <Route  path='user' element={<User user={user}></User>}/>
          </Route>
      </Routes>
     
    </div>
  )
}

export default App
