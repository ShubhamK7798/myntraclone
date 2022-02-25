import User from "../../../database/UserModel"
import dbConnect from "../../../database/connect"

export default async function handler(req,res){

    await dbConnect()


    const {method} = req


    if(method === "GET"){

        const getallusers = await User.find()
        if(!getallusers) return res.status(500).json({message:'Server error'})
        const users = getallusers.map(({_id,username,email,role,avatar,admin})=> ({_id,username,email,role,avatar,admin}))
        res.status(200).json(users)
    }
}