import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../assests/data/products";
import { Button } from "@material-tailwind/react";
import { toast } from "react-toastify";
function ProductDetail({ cartdata, setCartData }) {
  const navigate = useNavigate();

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [related, setReleted] = useState([]);
  useEffect(() => {
    const filteredProducts = products.filter((e) => e.id === id);
    setProduct(filteredProducts[0]);
    const relatedProduct = products.filter(
      (item) => item.category === product.category
    );
    setReleted(relatedProduct);
  }, [id, product.category]);
  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };
  const addToCart = (id, name, price, image) => {
    const obj = {
      id,
      name,
      price,
      image,
    };
    setCartData([...cartdata,obj])
    toast.success("Product added to cart ",{position: "bottom-right"})
    console.log(cartdata)
  };
  return (
    <>
      <div class="  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <>
          <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
              <div>
                <div class=" rounded-lg  mb-4">
                  <div class=" rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                    <img
                      className=" object-contain"
                      src={product.image}
                      alt="imagee"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="md:flex-1 px-4">
              <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                {product.name}
              </h2>
              <p class="text-gray-500 text-sm">
                
                <div class="text-indigo-600 hover:underline">
                  {product.category}
                </div>
              </p>

              <div class="flex items-center space-x-4 my-4">
                <div>
                  <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span class="text-indigo-400 mr-1 mt-1">$</span>
                    <span class="font-bold text-indigo-600 text-3xl">
                      {product.price}
                    </span>
                  </div>
                </div>
                <div class="flex-1">
                  <p class="text-green-500 text-xl font-semibold">Save 12%</p>
                  <p class="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                </div>
              </div>

              <p class="text-blck">
                Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae
                exercitationem porro saepe ea harum corrupti vero id laudantium
                enim, libero blanditiis expedita cupiditate a est.
              </p>

              <div class="flex py-4 space-x-4">
                <Button
                  onClick={()=>addToCart(product.id, product.name, product.price, product.image)}
                  variant="gradiant"
                  size="md"
                  color="pink"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </>
        <hr />
        <div>Suggestion</div>
        <div className="">
          <div className=" grid grid-cols-4 px-2  gap-3 py-5">
            {related.map((e) => {
              return (
                <>
                  <div class="bg-white w-64 shadow-2xl border rounded-xl">
                    <img
                      src={e.image}
                      alt="Productimage"
                      class="h-72 w-64 object-cover rounded-t-xl"
                    />

                    <div class="px-4 py-3 w-64">
                      <span class="text-gray-400 mr-3 uppercase text-xs">
                        Brand
                      </span>
                      <p class="text-lg font-bold text-black truncate block capitalize">
                        {e.name}
                      </p>
                      <div class="flex items-center">
                        <p class="text-lg font-semibold text-black cursor-auto my-3">
                          ${e.price}
                        </p>
                        <del>
                          <p class="text-sm text-gray-600 cursor-auto ml-2">
                            $199
                          </p>
                        </del>
                        <div class="ml-auto">
                          <Button
                            variant="gradiant"
                            size="sm"
                            color="pink"
                            onClick={() => {
                              handleClick(e.id);
                            }}
                          >
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
