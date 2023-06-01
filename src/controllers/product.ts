import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle"
import { insertProduct, getProducts, getProduct, updateProduct, deleteProduct, getActiveProducts } from "../services/product"

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await insertProduct(body)
        res.send(responseItem)
    } catch (e) {
        handleHttp(res, 'ERROR POST ITEM')
    }
}

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getProducts();
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR GET ITEMS')
    }
}

const getItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const response = await getProduct(id);
        const data = response ? response : 'NOT FOUND'
        res.send(data)
    } catch (e) {
        handleHttp(res, 'ERROR GET ITEM')
    }
}

const getActiveItems = async (_: Request, res: Response) => {
    try {
        const response = await getActiveProducts();
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR GETTING ACTIVE ITEMS');
    }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params
        const response = await updateProduct(id, body);
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR UPDATE ITEM')
    }
}

const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const response = await deleteProduct(id);
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR UPDATE ITEM')
    }
}


export { postItem, getItems, getItem, getActiveItems, updateItem, deleteItem }