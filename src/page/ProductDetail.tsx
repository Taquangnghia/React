import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOne, read, remove } from '../api/product';
import Footer from '../compledn/footer';
import { ProductType } from '../type/Product';

type Props = {
    onAddToCart: (id: number) => void
}

const ProductDetail = (props: Props) => {
    const {id} =useParams();

    const [product,setProduct] = useState<ProductType[]>([]);
    useEffect(()=>{
        const getProduct  = async ()=>{
            const {data} = await getOne(id);
           setProduct(data);
        };
        getProduct();   
    },[])
  return (
    // <div>
    //     <div className="row">
    //         <div className="col-6">
    //             <img src={product?.img} alt="" className='img-fluid' />
    //         </div>
    //         <div className="col-6">
    //         <h2>{product.name}</h2>
    //         <p>{product.price}</p>
    //         </div>
    //     </div>
        
    // </div>
    <div className="shadow-xl rounded-md ">
    <div className="detail w-[1200px] mx-auto mt-5 bg-white rounded-lg px-5 pt-5 pb-10">
        <div className="border-b pb-4 font-bold text-2xl capitalize ">
            <h2>{product.name}</h2>
        </div>
        <div className="grid grid-cols-2 gap-5 d-flex  ">
            <div>
                <img className="w-[500px] mx-auto" src={product.img} width="300" />
            </div>
            <div>
                <div className="price font-bold text-red-600 text-3xl mt-3">
                <div className=" text-center ">
                <h5>{product.desc}
                </h5>
                <p>{product.price} VND</p>
               
                <button type="submit" className="btn btn-secondary mt-3 " onClick={()=>props.onAddToCart(product._id)}>ThemGiohang</button>
                </div>
                </div>

               
             
              
            </div>
        </div>
        <div className="mt-4">
                    <h2 className="uppercase font-bold text-xl text-stone-700">Bảo hành:</h2>
                    <p><span className="text-red-600 font-bold text-xl">*</span> Gói bảo hành mở rộng lên đến 24 tháng, hỗ trợ bảo
                        hành theo chính sách tại trị trường Việt Nam.</p>
                    <p><span className="text-red-600 font-bold text-xl">*</span> Phần mềm: Hỗ trợ trọn đời</p>
                    <p><span className="text-red-600 font-bold text-xl">*</span> Gói bảo hành phần cứng [<span className="text-blue-500">
                        <a >Xem tại đây</a> </span>]</p>
                </div>
   
    </div>
    <Footer/>
</div>
  )
}

export default ProductDetail