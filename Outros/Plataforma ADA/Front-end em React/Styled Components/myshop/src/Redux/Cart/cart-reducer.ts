import { act } from "react";
import { Product } from "../../data/products";

interface CartState {
    cart: Product[]
}

const initialState: CartState = {
    cart: []
}

export interface CartAction {
    type: string
    payload: Product
}


export function cartReducer(state = initialState, action: CartAction) {

    switch (action.type) {
        case "cart/add-product":
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.payload
                ]
            }
        case "cart/remove-product":
            const productToRemove = action.payload
            const filteredCart = state.cart.filter(product => product.id !== productToRemove.id)

            return {
                ...state,
                cart: filteredCart
            }
            
        default:
            return state
    }

}