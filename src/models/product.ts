import { Schema, model } from "mongoose";
import { Product } from "../interfaces/product.interface";

const ProductSchema = new Schema<Product>(
    {
        name: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        isDeleted: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ProductModel = model('products', ProductSchema);
export default ProductModel;