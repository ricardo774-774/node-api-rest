import { Request, Response } from "express";
import { createCar, deleteCar, getCar, getCars, updateCar } from "../services/item.service";
import { handleHttp } from "../utils/error.handle";

const getItem = async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const item = await getCar(id);
        res.send(item);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEM')
    }
}

const getItems = async (req: Request, res: Response) => {
    try {
        const items = await getCars();
        res.send(items);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
}

const createItem = async ({ body }: Request, res: Response) => {
    try {
        const item = await createCar(body);
        res.send(item);
    } catch (error) {
        handleHttp(res, 'ERROR_CREATE_ITEM', error);
    }
}

const deleteItem = async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const item = await deleteCar(id);
        res.send(item);
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_ITEM')
    }
}

const updateItem = async(req: Request, res: Response) => {
    try {
        const { id } = req.params; 
        const item = await updateCar(id, req.body)
        res.send(item);
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_ITEM')
    }
}

export {
    getItem,
    getItems,
    createItem,
    deleteItem,
    updateItem
};