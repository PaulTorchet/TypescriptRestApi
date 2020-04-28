/**
 * Data Model Interfaces
*/

import { Item } from "./item.interface";
import { Items } from "./items.interface";


/**
 * In-Memory Store
*/

const items: Items = {
    1: {
        id: 1,
        name: "Burger",
        price: 5.99,
        description: "Tasty",
        image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
    },
    2: {
      id: 2,
      name: "Pizza",
      price: 2.99,
      description: "Cheesy",
      image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
    },
    3: {
      id: 3,
      name: "Tea",
      price: 1.99,
      description: "Informative",
      image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
    }
}


/**
 * Service Methods
*/

export const findAll = async (): Promise<Items> => {
    return items;
};

export const find = async (id: number): Promise<Item> => {
    const item: Item = items[id];

    if (item) {
        return item;
    }
    else {
        throw new Error('No item found');
    }
};

export const create = async (newItem: Item): Promise<void> => {
    const id = new Date().valueOf();
    items[id] = {
        id,
        ...newItem
    };
};

export const update = async (updatedItem: Item): Promise<void> => {
    if (items[updatedItem.id]) {
        items[updatedItem.id] = updatedItem;
        return;
    }
    else {
        throw new Error('No item found to update');
    }
};

export const remove = async (id: number): Promise<void> => {
    const item: Item = items[id];

    if (item) {
        delete items[id];
        return;
    }
    else {
        throw new Error('No item found to delete');
    }
}