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
      <div className="w-full ">
        <div className="container max-w-screen-xl mx-auto border border-black flex box-border px-16 gap-24 py-40">
          <div className="w-5/12 h-96 flex flex-col gap-5 ">
            <div className="border-2 border-gray-500 rounded-[50px] p-12 w-full h-full">
              <img src={product.image} alt="" className="w-full " />
            </div>
            <div className="w-full flex  gap-5 justify-between">
              <div className="border-2 border-gray-500 rounded-3xl w-6/12 px-9">
                <img src={product.image} alt="" className="w-full" />
              </div>
              <div className="border-2 border-gray-500 rounded-3xl w-6/12 px-9">
                <img src={product.image} alt="" className="w-full" />
              </div>
            </div>
          </div>
          <div className="w-3/12">
            {" "}
            <p>name: {product.name}</p>
            <p>descroption: {product.description}</p>
            <p>stock: {product.stock}</p>
            <p>price: {product.price}</p>
            <p>sale: {product.sale}</p>
            <p>category: {product.category}</p>
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
        </div>
      </div>
    )
  );
}
