import { Product } from "../interfaces/product.interface";
import ProductModel from "../models/product";

const insertProduct = async (item: Product) => {
    const responseInsert = await ProductModel.create(item);
    return responseInsert;
}

const getProducts = async () => {
    const responseItem = await ProductModel.find({});
    return responseItem;
};

const getProduct = async (id: string) => {
    const responseItem = await ProductModel.findOne({ _id: id });
    return responseItem;
}

const updateProduct = async (id: string, data: Product) => {
    const responseItem = await ProductModel.findOneAndUpdate({ _id: id }, data, { new: true });
    return responseItem;
}

const deleteProduct = async (id: string) => {
    const responseItem = await ProductModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return responseItem;
}

export { insertProduct, getProducts, getProduct, updateProduct, deleteProduct }