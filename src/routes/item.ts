import { Router } from "express";
import { createItem, deleteItem, getItem, getItems, updateItem } from "../controllers/item.controller";

const router = Router();

router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', createItem);
router.delete('/:id', deleteItem);
router.put('/:id', updateItem);

export { router };