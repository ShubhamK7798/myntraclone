import Image from 'next/image'
import React from 'react'

const ProductCard = ({img,title,price}) => {
  return (
    <div className='flex flex-col flex-shrink-0 w-56 h-96'>

        <div className='relative h-3/5'>
            <Image src={img}  layout="fill" className='contain'  />
        </div>
        <div className='font-semibold'   >
            <h1>{title}</h1>
            <p>Rs{price}</p>
        </div>




    </div>
  )
}

export default ProductCard