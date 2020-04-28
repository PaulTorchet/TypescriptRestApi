/**
 * Required External Modules and Interfaces
*/

import express from "express";
import * as ItemController from '../controllers/item.controller';

/**
 * Router Definition
*/

export const itemRouter = express.Router();


/**
 * Controller Definitions
*/

// GET items/
itemRouter.get('/', ItemController.getAllItems)
  
// GET items/:id
itemRouter.get("/:id", ItemController.getOneItem);

// POST items/
itemRouter.post("/", ItemController.createItem);
  
// PUT items/:id
itemRouter.put("/:id", ItemController.updateItem);
  
// DELETE items/:id
itemRouter.delete("/:id", ItemController.deleteItem);