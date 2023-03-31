import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext.jsx";
import Cart from "../../img/Cart.jsx";

export default function Products(props) {
  const { productLimit, category, filterProduct } = useContext(ProductContext);
  const [products, setProducts] = useState([]);
  const [isSelect, setIsSelect] = useState({ index: 0, category: "all" });
  const [categ, setCateg] = useState();
  const [limit, setLimit] = useState(8);
  useEffect(() => {
    if (isSelect.index == 0) {
      productLimit(limit).then((res) => {
        setProducts(res.data);
      });
    } else {
      filterProduct(isSelect.category, limit).then((res) => {
        setProducts(res.data);
      });
    }
  }, [limit, isSelect]);
  useEffect(() => {
    category().then((res) => {
      setCateg(res.data);
    });
  }, []);
  const navigate = useNavigate();
  function openPageHandler(product) {
    navigate(`/product/${product._id}`);
  }
  return (
    products && (
      <div className="w-full py-32">
        <div className=" flex flex-wrap container max-w-screen-xl mx-auto gap-10">
          <div className=" w-full flex justify-between ">
            <h1 className="text-blue-900 text-4xl">Popular products</h1>
            <div className="flex gap-3 flex-wrap">
              <button
                key={0}
                className={` px-5 py-3 rounded-full ${
                  0 == isSelect.index
                    ? `bg-lime-400 text-white`
                    : "border border-blue-900 text-blue-900"
                } hover:bg-lime-400 hover:text-white hover:border-none`}
                onClick={() => {
                  setIsSelect({ index: 0, category: "all" });
                  setLimit(8);
                }}
              >
                all
              </button>
              {categ &&
                categ.map((category, index) => {
                  return (
                    <button
                      key={index + 1}
                      className={` px-5 py-3 rounded-full ${
                        index + 1 == isSelect.index
                          ? `bg-lime-400 text-white`
                          : "border border-blue-900 text-blue-900"
                      } hover:bg-lime-400 hover:text-white hover:border-none`}
                      onClick={() => {
                        setLimit(8);
                        setIsSelect({
                          index: index + 1,
                          category: category._id,
                        });
                      }}
                    >
                      {category._id}
                    </button>
                  );
                })}
            </div>
          </div>

          {products.map((product, index) => {
            return (
              <div
                className="h-72 w-72 border-2 border-grey-500 rounded-xl box-border p-5 mb-5"
                key={index}
                onClick={() => openPageHandler(product)}
              >
                <div className="w-full h-2/3">
                  <img src={product.image} alt="" className="h-full w-full" />
                </div>
                <div className="w-full h-1/3 relative">
                  <p className=" text-blue-900"> {product.name}</p>
                  <p className="text-gray-600">{product.category}</p>
                  <p className="text-gray-800">${product.price}</p>
                  <div className=" h-10 rounded-full w-10 bg-gray-300 absolute bottom-2 right-2 flex items-center justify-center p-2 hover:bg-blue-900">
                    <Cart />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="w-full flex justify-center">
            <button
              className={`bg-lime-500 px-7 rounded-full text-gray-200 py-3 ${
                products.length < limit && "hidden"
              }`}
              onClick={() => {
                setLimit(limit + 4);
                console.log("is click");
              }}
            >
              see more
            </button>
          </div>
        </div>
      </div>
    )
  );
}
