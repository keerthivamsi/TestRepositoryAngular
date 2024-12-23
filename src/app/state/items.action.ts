import { Product } from "../models/product.model";
import { createAction, props } from '@ngrx/store';

export const addItem = createAction(
    '[Items] Add Item',
    props<{item: string}>()
)

export const deleteItem = createAction(
    '[Items] delete Item',
    props<{item: string}>()
)

export const addProduct = createAction(
    '[Items] Add Product', 
    props<{item: Product}>()
)

export const deleteProduct = createAction(
    '[Items] delete Product', 
    props<{item: string}>()
)

export const updateProduct = createAction(
    '[Items] update Product', 
    props<{item: Product}>()
)