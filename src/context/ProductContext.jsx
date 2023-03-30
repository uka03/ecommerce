import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [product, setProduct] = useState();

  async function limitProduct(limit) {
    let product = await axios.get(
      `http://localhost:3030/product?limit=${limit}`
    );
    return product;
  }
  return (
    <ProductContext.Provider value={{ productLimit: limitProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
