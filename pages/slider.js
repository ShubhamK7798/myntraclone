import Image from 'next/image'
import React from 'react'

const Slider = () => {

 const category2 = ['/1.webp','/2.webp','/3.webp','/4.jpg','/5.jpg','/6.webp']


  return (
    <div>


        <div  className='flex overflow-x-auto'>


            {category2.map((item)=><div className='relative flex shrink-0 w-screen h-[50vh]'><Image key={item} src={item} layout='fill'objectFit='cover' />
            </div>)}
        </div>



    </div>
  )
}

export default Slider