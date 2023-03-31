import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext.jsx";

export default function Slide() {
  const { productLimit } = useContext(ProductContext);
  const [product, setProduct] = useState();
  useEffect(() => {
    productLimit(1).then((res) => {
      setProduct(res.data[0]);
    });
  }, []);

  return (
    product && (
      <div className="bg-blue-900 h-[500px]">
        <div className="container max-w-screen-xl mx-auto p-24 flex items-center h-full  justify-between  ">
          <div className="w-72 m-10">
            <h2 className="text-white text-5xl w-60 mb-10">{product.name}</h2>
            <div className="flex w-full justify-around gap-2">
              <button
                type="button"
                className="inline-block rounded-full bg-white px-6 pt-2.5 pb-2  text-blue-900 font-semibold"
              >
                buy now
              </button>
              <button
                type="button"
                className="inline-block rounded-full  px-6 pt-2.5 pb-2  text-lime-500 font-semibold border border-lime-500"
              >
                read more
              </button>
            </div>
          </div>
          <div className="  h-full w-[600px] relative flex items-center justify-center ">
            <img src={`${product.image}`} alt="" className="w-full" />
            <div className="w-32 h-32 bg-lime-300 rounded-full absolute bottom-3 end-4 flex flex-col items-center justify-center  text-xl font-bold text-blue-900">
              <p className="m-none">only </p>
              <p className="m-none">${product.price}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
