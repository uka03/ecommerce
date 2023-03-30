import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext.jsx";

export default function Slide() {
  const { productLimit } = useContext(ProductContext);
  const [product, setProduct] = useState();
  useEffect(() => {
    productLimit(1).then((res) => setProduct(res.data[0]));
  }, []);
  console.log(product);

  return (
    product && (
      <div className="bg-blue-900 h-[600px]">
        <div className="container max-w-screen-xl mx-auto p-24 flex items-center h-full  ">
          <div className="w-64 m-10">
            <h2 className="text-white text-5xl w-60 mb-10">{product.name}</h2>
            <div className="flex w-full justify-around gap-2">
              <button
                type="button"
                class="inline-block rounded-full bg-white px-6 pt-2.5 pb-2  text-blue-900 font-semibold"
              >
                buy now
              </button>
              <button
                type="button"
                class="inline-block rounded-full  px-6 pt-2.5 pb-2  text-lime-500 font-semibold border border-lime-500"
              >
                read more
              </button>
            </div>
          </div>
          <div className="">
            <img src={`${product.image}`} alt="" />
          </div>
        </div>
      </div>
    )
  );
}
