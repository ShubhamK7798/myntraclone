import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import Filter from '../components/Filter'
import ProductCard from '../components/ProductCard'

const Men = ({productsdata}) => {

    localStorage.setItem('men',JSON.stringify(productsdata))


    


    const category = [...new Set(productsdata.map((item)=> item.category    ))]
    const brand = [...new Set(productsdata.map((item)=> item.brand    ))]

    

  return (
    <div className='grid grid-cols-6 max-w-[1500px] mx-auto '   >
        <div className='col-span-1 '>

        <Filter category={category} brand={brand}/>
        </div>
        <div className='col-span-5 grid grid-cols-5 '>

        {productsdata.map(({img,title,price,_id},index)=>    <ProductCard key={_id}  index={index} id={_id} img={img} price={price} title={title} />)}
    
        </div>



    </div>
  )
}

export default Men


export async function getStaticProps(context){

    const res = await axios.get('http://localhost:3000/api/products',{
        params:{
            gender:'Men'
        }
    })
    const productsdata = await res.data
    return {
        props:{
            productsdata,
        },
    }

    




}