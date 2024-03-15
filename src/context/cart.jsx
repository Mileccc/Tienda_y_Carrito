import { createContext, useReducer } from 'react';
import { cartReducer, cartInitialState, CART_ACTION_TYPES } from '../reducers/cart.js';

// 1. Crear contexto
export const CartContext = createContext();

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) => dispatch({
    type: CART_ACTION_TYPES.ADD_TO_CART,
    payload: product
  });

  const removeFromCart = product => dispatch({
    type: CART_ACTION_TYPES.REMOVE_FROM_CART,
    payload: product
  });

  const clearCart = () => dispatch({
    type: CART_ACTION_TYPES.CLEAN_CART
  });

  return { state, addToCart, clearCart, removeFromCart };
}

// 2. Crear el Provider, para proveer el contexto
export function CartProvider ({ children }) {
  const { state, addToCart, clearCart, removeFromCart } = useCartReducer();

  return (
    <CartContext.Provider value={{ cart: state, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
