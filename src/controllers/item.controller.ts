import Item, { ItemInterface } from '../models/item.model';
import { Request, Response, NextFunction} from 'express';


export let getAllItems = (req: Request, res: Response, next: NextFunction) => {
    
    Item.find()
    .then((items) => {
        res.status(200).send(items);
    }).catch((err) => {
        res.status(404).send(err.message);
    });

};

export let getOneItem = (req: Request, res: Response, next: NextFunction) => {
    
    Item.findOne({ _id: req.params.id })
    .then((item) => {
        res.status(200).send(item);
    }).catch((err) => {
        res.status(404).send(err.message);
    });

};

export let createItem = (req: Request, res: Response, next: NextFunction) => {

    const itemObject = req.body;
    delete itemObject._id;

    const item = new Item({ ...itemObject })

    item.save()
    .then(() => {
        res.status(201).send('Item enregistré !')
    }).catch((err) => {
        res.status(400).send(err.message)
    });

};

export let updateItem = (req: Request, res: Response, next: NextFunction) => {
    
    const itemID: string = req.params.id;
    const itemObject = { ...req.body };
    
    Item.updateOne({ _id: itemID }, { itemID, ...itemObject })
    .then(() => {
        res.status(200).send('Objet ' + itemID + ' modifié !');
    }).catch((err) => {
        res.status(400).send(err.message);
    });
 
};


export let deleteItem = (req: Request, res: Response, next: NextFunction) => {
    
    const itemID: string = req.params.id;
    
    Item.deleteOne({ _id: itemID })
    .then(() => {
        res.status(200).send('Objet ' + itemID + ' supprimé !');
    }).catch((err) => {
        res.status(400).send(err.message);
    });
 
};