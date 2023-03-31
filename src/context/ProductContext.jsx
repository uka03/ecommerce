import axios from "axios";

import { createContext } from "react";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  async function limitProduct(limit) {
    let product = await axios.get(
      `http://localhost:3030/products?limit=${limit}`
    );
    return product;
  }
  async function filterProduct(filter, limit) {
    let product = await axios.get(`http://localhost:3030/products`, {
      params: { filter, limit },
    });
    return product;
  }
  async function idProduct(id) {
    let product = await axios.get(`http://localhost:3030/product?id=${id}`);
    return product;
  }
  async function Category() {
    let category = await axios.get(`http://localhost:3030/category`);
    return category;
  }
  return (
    <ProductContext.Provider
      value={{
        productLimit: limitProduct,
        category: Category,
        filterProduct: filterProduct,
        idProduct: idProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
