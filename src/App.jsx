import { Products } from './components/Products.jsx';
import './index.css';
import { useFetchProducts } from './hooks/useFetchProducts.js';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { IS_DEVELOPMENT } from './config.js';
import { useFilters } from './hooks/useFilters.js';
import { Cart } from './components/Cart.jsx';

function App () {
  const { products, isLoading, error } = useFetchProducts();
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products!</p>;

  return (
    <>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  );
}

export default App;
