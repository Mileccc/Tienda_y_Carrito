import { ClearCartIcon, CartIcon } from './Icons.jsx';
import { useId } from 'react';
import './Cart.css';
import { useCart } from '../hooks/useCart.js';

function CartItem ({ price, quantity, title, image, addToCart }) {
  return (
    <li>
      <img
        src={image}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

export function Cart () {
  const cartCheckboxId = useId();

  const { cart, clearCart, addToCart } = useCart();

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />
      <aside className='cart'>
        <ul>
          {cart.map(product => (
            <CartItem key={product.id} addToCart={() => addToCart(product)} {...product} />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>

      </aside>
    </>
  );
}
