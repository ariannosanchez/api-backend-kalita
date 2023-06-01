import { Router } from "express";
import { deleteItem, getActiveItems, getItem, getItems, postItem, updateItem } from "../controllers/product";

const router = Router()

router.get('/actives', getActiveItems);
router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', postItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem)

export { router }