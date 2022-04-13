import React from 'react'
import Banner from '../compledn/Banner'
import ProductList from '../compledn/ProductList'
import { ProductType } from '../type/Product'

type HomePageProps = {
    product:ProductType[];
}

const HomePage = (props: HomePageProps) => {
  return (
    <div>
            <Banner></Banner>
            <ProductList products={props.product}></ProductList>
    </div>
  )
}

export default HomePage