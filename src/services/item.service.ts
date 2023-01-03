import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

const createCar = async ( item: Car ): Promise<Car> => {
    const _item = await ItemModel.create(item);
    return _item;
};

const getCars = async (): Promise<Car[]> => {
    const _items = await ItemModel.find({});
    return _items;
};

const getCar = async ( id: string ): Promise<Car | null> => {
    const _item = await ItemModel.findOne({_id: id});
    return _item;
};

const updateCar = async ( id: string, item: Car ): Promise<Car | null> => {
    const _item = await ItemModel.findOneAndUpdate(
        {_id: id},
        item,
        {new: true}
    );
    return _item;
};

const deleteCar = async ( id: string ): Promise<Car | null> => {
    const _item = await ItemModel.findOneAndDelete({_id: id});
    return _item;
};

export {
    createCar,
    getCars,
    getCar,
    updateCar,
    deleteCar
};