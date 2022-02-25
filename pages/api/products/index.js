import dbConnect from '../../../database/connect'
import Product from '../../../database/ProductsModel'



export default async function handler(req,res){
    await dbConnect()

    const {body,method,query:{gender}} = req


    if(method === 'GET'){
        
        const allProducts = await Product.find({ gender})
        allProducts || res.status(404).json('no products found')
        res.status(200).json(allProducts)


    }

    if(method === 'POST'){
        try {
            const product = await Product.create(body) 
            res.status(200).json(product)
            
        } catch (error) {
            res.status(404).json(error.message)
            
        }

   


    }



}