import instance from "./instan";
export const listCate = () => {
    const url = `/api/category`;
    return instance.get(url);
}
export const cateProduct = (id: any) => {
    const url = `/api/category/${id}`;
    return instance.get(url);
}
export const createCate = (category: any) => {
    const url = `/api/category`;
    return instance.post(url, category);
}
export const removeCate = (id: any) => {
    const url = `/api/category/${id}`;
    return instance.delete(url);
}