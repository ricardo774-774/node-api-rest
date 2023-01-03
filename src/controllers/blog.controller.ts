import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getBlog = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_BLOG')
    }
}

const getBlogs = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_BLOGS')
    }
}

const createBlog = ({ body }: Request, res: Response) => {
    try {
        res.send(body);
    } catch (error) {
        handleHttp(res, 'ERROR_CREATE_BLOG')
    }
}

const deleteBlog = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_BLOG')
    }
}

const updateBlog = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_BLOG')
    }
}

export {
    getBlog,
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlog
};