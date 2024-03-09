import { ClearCartIcon, CartIcon } from './Icons.jsx';
import { useId } from 'react';
import './Cart.css';

export function Cart () {
  const cartCheckboxId = useId();

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />
      <aside className='cart'>
        <ul>
          <li>
            <img
              src='https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg'
              alt='Tv'
            />
            <div>
              <strong>Tv</strong> - $999.99
            </div>
            <footer>
              <small>
                Qty: 1
              </small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>

      </aside>
    </>
  );
}
