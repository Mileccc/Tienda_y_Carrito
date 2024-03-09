import './Product.css'
import { AddToCartIcon } from './Icons.jsx'

export function Products ({ products }) {
  return (
    <main className='products'>
      <ul>
        {products.slice(0, 10).map(product => (
          <li key={product.id}>
            <img
              className='product-image'
              src={product.image}
              alt={product.description}
            />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
