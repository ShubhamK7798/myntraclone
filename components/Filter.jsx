import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Filter = ({category,brand}) => {

    const [queryparams,setQueryparams] = useState([])

    const router = useRouter()
   

    const handlecheckbox = (e) =>{

        
      if(e.target.checked) {
        setQueryparams([...queryparams,e.target.name])

      router.push({
        query: {[e.target.dataset.brand]:queryparams}
      })
    }
        
       
       
    }


  return (
    <div className='sticky '>
        <h1 className='font-semibold mb-4 text-lg'>Filter</h1>

        <div>
            <h1 className='mb-4 font-semibold'>Category</h1>
            {category.map((i)=> {
                return  <div key={i}>

                  <input type='checkbox' id={i} name={i} onChange={handlecheckbox} data-brand = "Category"/>
                  <label htmlFor={i}><span className='font-serif ml-8' >{i}  </span></label>
                  </div>
            } )}

        </div>
        <br/><br/>
        <div>
            <h1 className='mb-4 font-semibold '>Brand</h1>
            {brand.map((i)=> {
                return  <div key={i}>

                  <input type='checkbox' id={i} name={i} onChange={handlecheckbox} data-brand = "Brand" />
                  <label htmlFor={i}><span className='font-serif ml-8' >{i}  </span></label>
                  </div>
            } )}

        </div>

      








    </div>
  )
}

export default Filter