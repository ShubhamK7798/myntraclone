import axios from 'axios'
import React from 'react'
import Filter from '../components/Filter'
import ProductCard from '../components/ProductCard'

const Men = ({productsdata}) => {


    const category = [...new Set(productsdata.map((item)=> item.category    ))]
    const brand = [...new Set(productsdata.map((item)=> item.brand    ))]

    

  return (
    <div className='grid grid-cols-6'   >
        <div className='col-span-1 '>

        <Filter category={category} brand={brand}/>
        </div>
        <div className='col-span-5 grid grid-cols-4 '>

        {productsdata.map(({img,title,price,_id})=>    <ProductCard key={_id} img={img} price={price} title={title} />)}
    
        </div>



    </div>
  )
}

export default Men


export async function getStaticProps(context){
        // const axios = axios()

    const res = await axios.get('http://localhost:3000/api/products')
    const lol = await res
    const productsdata = await res.data
    return {
        props:{
            productsdata,
        },
    }

    




}