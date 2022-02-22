import Image from 'next/image'
import React, { useState } from 'react'

const Login = () => {




    const [form,setForm]=useState({
        email : '',
        password : ''
    })


    const handleForm =  (e)=>{
        setForm(prev=>({...prev,[e.target.name]:e.target.value}))
      
    }
    const submitlogin = async ()=>{
    }
  return (
    <div className='w-screen h-[80vh] flex items-center justify-center bg-pink-50 py-8'>

        <div className=' flex flex-col space-y-4 w-3/5 lg:w-3/12 h-full bg-white '>
            <div className='relative  h-1/3 '>
                <Image src='/login.webp'  layout='fill' className='object-contain object-top'   />
            </div>
            <div className='flex flex-col px-4 space-y-8 items-center'>


                <h1 className='-ml-20'>Login or Signup</h1>
                <div>
                <label htmlFor="email">Email</label><br/>
                <input type="text" name="email" id="email" className='border-2 p-1 mt-2' placeholder='Enter Email' value={form.email} onChange={handleForm}/>

                </div>
                <div>
                <label htmlFor="password">Password</label>
                <br/>
                <input type="password" name="password" id="password"  className='border-2 p-1 mt-2' placeholder='Enter Password' value={form.password} onChange={handleForm}/>

                </div>

                <button onClick={submitlogin} className='bg-red-500 p-2 w-2/3 text-white hover:scale-105 transition-all duration-500'>Submit</button>
            </div>

        </div>






    </div>
  )
}

export default Login