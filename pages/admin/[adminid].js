import axios from 'axios'
import React from 'react'

const AdminId = ({usersData}) => {
  return (
    <div>

        <table>
                <thead>
                    <tr className='uppercase'>
                        <th>Serial No</th>
                        <th>ID</th>
                        <th>username</th>
                        <th>email</th>
                        <th>role</th>
                        <th>admin</th>
                    </tr>


                </thead>
                <tbody>
                    {usersData.map(({admin,email,role,username,_id},index)=> {
                        return (
                    <tr key={_id} >
                        <td>{index+1}</td>
                        <td>{_id}</td>
                        <td>{username}</td>
                        <td>{email}</td>
                        <td>{role}</td>
                        <td>{admin}</td>
                      
                    </tr>)

                    })}
                   
             
  
                

                </tbody>


        </table>



    </div>
  )
}

export default AdminId


export async function getServerSideProps(context){
    const params = context.query.adminid

    const res = await axios.get(process.env.BASE_URL+`/api/${params}`)
    const usersData = res.data


    return {
        props:{
            usersData,


        },
    }
}