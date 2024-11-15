import { Action, createReducer, on } from "@ngrx/store";
import { AppState, initialState } from "./app.state";
import * as ItemsActions from './items.action';
import { stat } from "fs";

const _itemsReducer = createReducer(
    initialState,
    on(ItemsActions.addItem, (state, {item}) => ({
        ...state, itemsnew: {...state.itemsnew, items: [...state.itemsnew.items, item]}
    })),
    on(ItemsActions.addProduct, (state, {item}) => ({
        ...state, itemsnew: {...state.itemsnew, productDetails: [...state.itemsnew.productDetails, item]}
    })),
    on(ItemsActions.updateProduct, (state, {item}) => ({
        ...state, itemsnew: {...state.itemsnew, productDetails: state.itemsnew.productDetails.map(product => product.id === item.id? {...product, name: item.name, price: item.price, quantity: item.quantity}: product)}
    })),
    on(ItemsActions.deleteProduct, (state, {item}) => ({
        ...state, itemsnew: {...state.itemsnew, productDetails: state.itemsnew.productDetails.filter(x=>x.id !== item)}
    }))
)

export function itemsReducer(state: AppState | undefined, action: Action) {
    return _itemsReducer(state, action);
}