import { createContext, useReducer } from 'react';

// 1. Crear contexto
export const CartContext = createContext();

const initialState = [];
const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case 'ADD_TO_CART':{
      const { id } = actionPayload;
      const productInCartIndex = state.findIndex(item => item.id === id);

      if (productInCartIndex >= 0) {
        // Una forma sería usando structured Clone
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity++;
        return newState;
      }
      return [
        ...state,
        {
          ...actionPayload, // product
          quantity: 1
        }
      ];
    }
    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload;
      return state.filter(item => item.id !== id);
    }
    case 'CLEAN_CART': {
      return initialState;
    }
  }
  return state;
};

// 2. Crear el Provider, para proveer el contexto
export function CartProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  });

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  });

  const clearCart = () => dispatch({
    type: 'CLEAN_CART'
  });

  return (
    <CartContext.Provider value={{ cart: state, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
