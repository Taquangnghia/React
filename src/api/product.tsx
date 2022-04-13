import { ProductType } from '../type/Product';
import instance from './instan';
export const create = (product:ProductType)=>{
    const url = `/api/products`;
    return instance.post(url,product);
}

export const list = ()=>{
    const url = `/api/products`;
    return instance.get(url);
}

export const read = (id: string | undefined) => {
    const url = `/api/products/${id}`;
    return instance.get(url);
}

export const remove = (id:number)=>{
    const url = `/api/products/${id}`;
    return instance.delete(url);
}

export const update = (product:ProductType)=>{
    const url = `/api/products/${product._id}`;
    return instance.put(url,product);
}
export const getOne = (id: any) => {
    const url = `/api/products/${id}`;
    return instance.get(url)
}
export const search = (keyword: any) => {
    const url = `/api/search?q=${keyword}`;
    return instance.post(url)
}