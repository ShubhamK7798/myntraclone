import {connect,connection} from "mongoose"

const conn = {
    isConnected : false,
}

export default async function dbConnect(){
    conn.isConnected && console.log('mongo connected')
    if(conn.isConnected) return;

    const db = await connect(process.env.MONGO_URI)
    conn.isConnected = db.connections[0].readyState


    connection.on('connected',()=> console.log('Mongo connected'))
    connection.on('error',(err)=>console.log('error',err))

}