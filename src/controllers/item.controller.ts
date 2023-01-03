import { Request, Response } from "express";
import { create } from "../services/item.service";
import { handleHttp } from "../utils/error.handle";

const getItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEM')
    }
}

const getItems = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
}

const createItem = async ({ body }: Request, res: Response) => {
    try {
        const item = await create(body);
        res.send(item);
    } catch (error) {
        handleHttp(res, 'ERROR_CREATE_ITEM', error);
    }
}

const deleteItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_ITEM')
    }
}

const updateItem = (req: Request, res: Response) => {
    try {
        
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