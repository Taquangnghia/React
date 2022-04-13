
import { Outlet } from 'react-router-dom'
import Banner from '../compledn/Banner'
import Header from '../compledn/header'
import ProductList from '../compledn/ProductList'
import { CategoryType } from '../type/category'

type Props = {
  categories:CategoryType[]
  searchProduct: (keyword: string) => void
}

const Weblayout = (props: Props) => {
  return (
    <div className='container'>
    <Header categories={props.categories} search={props.searchProduct}/>

    <Outlet></Outlet>
    </div>
  )
}
export default Weblayout