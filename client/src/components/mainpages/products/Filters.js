import React, { useContext } from 'react';
import { GlobalState } from '../../../GlobalState';
import './products.css'

function Filters() {
  const state = useContext(GlobalState);
  const [categories] = state.categoriesAPI.categories;

  const [category, setCategory] = state.productsAPI.category;
  const [sort, setSort] = state.productsAPI.sort;
  // const [search, setSearch] = state.productsAPI.search;

  const handleCategory = (e) => {
    setCategory(e.target.value);
    // setSearch('');
  };

  // const handleSearch = (e) => {
  //   setSearch(e.target.value.toLowerCase());
  //   setCategory('');
  // };

  return (
    <div className="filter_menu">
      <div className="row">
        <span>Filters: </span>
        <select name="category" value={category} onChange={handleCategory}>
          <option value="">All Products</option>
          {categories.map((category) => (
            <option value={'category=' + category._id} key={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* <input
        type="text"
        value={search}
        placeholder="Enter your search!"
        onChange={handleSearch}
      /> */}
      <h1 style={{ textAlign: 'center' }}>OUR PRODUCTS</h1>
      
      <div className="row sort">
        <span>Sort By :-</span>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Newest</option>
          <option value="sort=oldest">Oldest</option>
          <option value="sort=-sold">Best sales</option>
          <option value="sort=-price">Price: High-Low</option>
          <option value="sort=price">Price: Low-High</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;