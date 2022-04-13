import { ProductUser } from "../type/user";
export const addLocalstorage = (user: ProductUser, next: () => void) => {
    localStorage.setItem('user', JSON.stringify(user));
    next();
}
export const getLocalstorage = () => {
    if (!localStorage.getItem('user')) return
    else return JSON.parse(localStorage.getItem('user') as string)
}