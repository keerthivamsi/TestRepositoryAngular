import { Product } from "../models/product.model"

export interface AppState {
    itemsnew: {
        productDetails: Product[],
        items: string[]
    }
}

export const initialState: AppState = {
    itemsnew: {
        productDetails: [
            {
                id: '1',
                name: 'keer',
                price: 350,
                quantity: 1

            }
        ],
        items: ['indian', 'international']
    }
}