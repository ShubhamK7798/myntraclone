import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Filter = ({category,brand}) => {

    const [queryparams,setQueryparams] = useState()

    const router = useRouter()
   

    const handlecheckbox = (e) =>{

        
        e.target.checked && setQueryparams({...queryparams,category:e.target.name})
        router.push({query:queryparams})
       
    }


  return (
    <div>
        <h1>Filter</h1>

        <div>
            <h1>Category</h1>
            {category.map((i)=> {
                return  <div key={i}>

                  <input type='checkbox' id={i} name={i} onChange={handlecheckbox} />
                  <label htmlFor={i}>{i}</label>
                  </div>
            } )}

        </div>

      








    </div>
  )
}

export default Filter