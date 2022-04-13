
import { Link, useParams } from 'react-router-dom'
import { cateProduct } from '../api/category'
import { ProductType } from '../type/Product'
import { formatPrice } from '../ultils/FormatPrice'
import { CategoryType } from '../type/category'
import Category from '../compledn/Danhmuc'
import React ,{useEffect,useState}from 'react'
import ProductList from '../compledn/ProductList'

type DanhMucProps = {
    categorys : CategoryType[]
}

const DanhMuc = (props: DanhMucProps) => {
    const [product, setProduct] = useState<ProductType[]>([]);
    const { id } = useParams()
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await cateProduct(id)
         
            setProduct(data.products)
        }
        getProduct();
    }, [])
  return (
    <div className='flex w-full mt-3'>
    {<ProductList categories={props.categorys} />}
    <div></div>
    {/* <div className='grid grid-cols-3 mt-2 gap-4'>
        {product?.map((product, index) => {
            return (
                <div className="group " key={index}>
                    <Link to={`/product/${product._id}`} className="no-underline">
                        <div className="card overflow-hidden" >
                            <img src={product.img} className="card-img-top mt-3 group-hover:scale-105 duration-300" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title text-lg text-black">{product.name}</h5>
                                <p className="card-text text-xl text-red-600 font-bold"> {formatPrice(`${product.price}`)} <u>đ</u></p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        })}
    </div> */}
         <div className="row">
                {product?.map((product,index)=>{
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
  )
}

export default DanhMuc