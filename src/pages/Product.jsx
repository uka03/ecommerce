import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext.jsx";

export default function Product(props) {
  const [product, setProduct] = useState();
  const id = useParams().id;
  console.log(id);
  const { idProduct } = useContext(ProductContext);

  useEffect(() => {
    idProduct(id).then((res) => setProduct(res.data));
  }, []);

  return (
    product && (
      <div>
        <img src={product.image} alt="" />
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>{product.stock}</p>
        <p>{product.price}</p>
        <p>{product.sale}</p>
        <p>{product.category}</p>
        <div>
          {product &&
            product.spec.map((spec, index) => {
              return (
                <div className="flex gap-3" key={index}>
                  <p>{Object.keys(spec)}:</p>
                  <p>{Object.values(spec)}</p>
                </div>
              );
            })}
        </div>
      </div>
    )
  );
}
