import { ProductUser } from '../type/user';
import instance from './instan';
export const singup = (singup:any)=>{
    const url = `/api/singup`;
    return instance.post(url,singup);
}
export const singin = (singin:any)=>{
    const url = `/api/singin`;
    return instance.post(url,singin);
}
export const listUser = () => {
    const url = `/api/users`;
    return instance.get(url);
}