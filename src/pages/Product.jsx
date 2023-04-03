import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext.jsx";

export default function Product(props) {
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(0);
  const id = useParams().id;
  console.log(id);
  const { idProduct } = useContext(ProductContext);

  useEffect(() => {
    idProduct(id).then((res) => setProduct(res.data));
  }, []);
  function stockHandler(stock) {
    if (stock >= 0) {
      return <pre className="text-green-500 ">in Stock</pre>;
    } else {
      return <pre className="text-red-500 ">out of Stock</pre>;
    }
  }
  return (
    product && (
      <div className="w-full ">
        <div className="container max-w-screen-xl mx-auto  flex box-border px-16 gap-24 py-32">
          <div className="w-5/12 h-96 flex flex-col gap-5 ">
            <div className="border-2 border-gray-500 rounded-[50px] p-12 w-full h-full">
              <img src={product.image} alt="" className="w-full " />
            </div>
            <div className="w-full flex  gap-5 justify-between">
              <div className="border-2 border-gray-500 rounded-3xl w-6/12 px-9 py-4">
                <img src={product.image} alt="" className="w-full" />
              </div>
              <div className="border-2 border-gray-500 rounded-3xl w-6/12 px-9 py-4">
                <img src={product.image} alt="" className="w-full" />
              </div>
            </div>
          </div>
          <div className="w-7/12">
            <div className=" flex flex-col gap-12  border-b-2 border-gray-500 w-full h-auto  pb-5">
              <div className=" flex flex-col gap-3">
                <p className="text-blue-900 text-3xl">{product.name}</p>
                <p>{product.category}</p>
                <p className="text-2xl font-bold">${product.price}</p>
              </div>
              <div className="flex flex-col gap-1">
                {product.sale && product.sale != 0 && (
                  <p className="text-blue-900"> {product.sale}% sale</p>
                )}
                <p className="flex gap-2">
                  Availability: {stockHandler(product.stock)}
                </p>
                <p className="text-gray-600">
                  Hurry up! only {product.stock} product left in stock!
                </p>
              </div>
            </div>
            <div className="pt-5 flex flex-col gap-10 border-b-2 border-gray-500 w-full  pb-5">
              <div className="flex gap-5 text-lg">
                <p>Quantity: </p>
                <div className="w-[130px] h-8 bg-gray-200 flex justify-between">
                  <button
                    className="w-1/4 border border-gray-700 "
                    onClick={() => {
                      quantity != 0 && setQuantity(quantity - 1);
                    }}
                  >
                    -
                  </button>
                  <p className="border-y text-center border-gray-700 w-1/2">
                    {quantity}
                  </p>
                  <button
                    className="w-1/4 border border-gray-700 "
                    onClick={() => {
                      quantity != product.stock && setQuantity(quantity + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex gap-5">
                <button className="bg-blue-900 px-14 py-5 text-2xl rounded-full text-white">
                  Add to cart
                </button>
                <button className="bg-blue-900 px-14 py-5 text-2xl rounded-full text-white">
                  Buy it now
                </button>
              </div>
            </div>
            <p className=" mb-5"> {product.description}</p>

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
