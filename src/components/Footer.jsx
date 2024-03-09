import { useFilters } from '../hooks/useFilters';
import './Footer.css';

export function Footer () {
  const { filters } = useFilters();
  return (
    <footer className='footer'>
      {
        JSON.stringify(filters, null, 2)
      }
      {
      /* <h4>Footer de la tienda en React ⚛️ - <span>@javi</span></h4>
      <h5>Shopping Cart</h5> */
      }

    </footer>
  );
}
