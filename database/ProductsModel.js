import { Schema,model,models } from "mongoose";

const ProductSchema = new Schema({
    title : {
        type : String,
        required:true
    },
    category:String,
    gender:String,
    price:{
        type : Number,
        required:[true,'Price is Req']
    },
    size:[String],
    img:{
        type : String,
        required:true
    },
    brand:String,
    description:String

},{
    timestamps:true,
    versionKey:false

})

export default models.Product || model('Product',ProductSchema)


