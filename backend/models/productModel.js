const mongsose = require("mongoose");

const productSchema = mongsose.Schema({
    name:{
        type:String,
        required:[true,"Please enter product name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please enter productDescription"]
    },
    price:{
        type:Number,
        required:[true,"PLease enter product Price"],
        maxLength:[8,"Price cannot exeed 8 characters"]
    },
    ratings:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
            type:String,
            required:true
            },
        url:{
            type:String,
            required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"Please enter Product Category"],
        
    },
    stock:{
        type:Number,
        required:[true,"Please enter Product Stock"],
        maxLength:[4,"Stock cannot exeed 4 characters"],
        default:1
    },
    numofReviews:{
        type: Number,
        default: 0,
    },
    reviews: [
        {
            user:{
                type:mongsose.Schema.ObjectId,
                ref:"User",
                required:true,
            },
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true,
            },
            comment:{
                type:String,
                required:true
            },
        },  
    ],


    user:{
        type:mongsose.Schema.ObjectId,
        ref:"User",
        required:true,
    },

    createAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongsose.model("Product",productSchema);