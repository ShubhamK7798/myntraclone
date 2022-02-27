import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const ProductCard = ({img,title,price,id,index,gender}) => {

  const router = useRouter()

  return (
    <div className='flex flex-col xl:flex-shrink-0 w-56 group h-fit hover:shadow-lg xl:m-4 cursor-pointer ' onClick={()=>router.push({
      pathname:`/${index}`,
      query:{gender}
    })} >

        <div className='relative h-60'>
            <Image src={img}  layout="fill" className='contain' blurDataURL={img} placeholder='blur' />
        </div>
        <div className='font-semibold px-4'   >
            <h1 className='my-2 group-hover:underline underline-offset-2'  >{title.split(' ').slice(0,3).join(' ')}</h1>
            <p>Rs{price}</p>
        </div>




    </div>
  )
}

export default ProductCard