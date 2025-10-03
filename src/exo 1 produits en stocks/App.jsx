/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Checkbox } from './components/forms/checkbox';
import { ProductCategoryRow } from './components/products/productCategoryRow';
import { ProductRow } from './components/products/productRow';

const PRODUCTS = [
  { category: 'Fruits', price: '1$', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '1$', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '1$', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '2$', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '4$', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '1$', stocked: true, name: 'Peas' },
];
function App() {
  const [showStockedOnly, setShowStockedOnly] = useState(false);
  const [search, setSearch] = useState('');
  const [maxPrice, setMaxPrice] = useState(5);

  const visibleProducts = PRODUCTS.filter(product => {
    if (showStockedOnly && !product.stocked) {
      return false;
    }
    if (search && !product.name.includes(search)) {
      return false;
    }
    if (product.price.replace('$', '') > maxPrice) {
      return false;
    }
    return true;
  });

  return (
    <div className="container my-3">
      <Searchbar
        showStockedOnly={showStockedOnly}
        onStockOnlyChange={setShowStockedOnly}
        search={search}
        showSearch={setSearch}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
      <ProductTable products={visibleProducts} />
    </div>
  );
}

function Searchbar({ showStockedOnly, onStockOnlyChange, search, showSearch, maxPrice, setMaxPrice }) {
  return (
    <div>
      <div className="mb-3">
        <input value={search} onChange={e => showSearch(e.target.value)} placeholder="Rechercher..." />
        <label
          htmlFor="priceRange"
          className="form-range"
          id="price-range"
          min={0}
          max={5}
          onChange={e => setMaxPrice(Number(e.target.value))}
          value={maxPrice}
        >
          Prix max : {maxPrice} $
        </label>
        <input
          type="range"
          value={maxPrice}
          onChange={e => setMaxPrice(Number(e.target.value))}
          min={1}
          max={5}
          className="form-range
        "
        />
        <Checkbox
          id="stocked"
          checked={showStockedOnly}
          onChange={onStockOnlyChange}
          label={'N afficher que les produits en stocks'}
        ></Checkbox>
      </div>
    </div>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;
  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow key={product.category} name={product.category} />);
    }
    lastCategory = product.category;

    rows.push(<ProductRow product={product} key={product.name} />);
  }
  return (
    <table
      className="table
    "
    >
      <thead>
        <tr>
          <th>Nom </th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
export default App;
