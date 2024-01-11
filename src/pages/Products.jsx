import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../assests/data/products";
function Products() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };
  const applyFilters = () => {
    let filteredProducts = products;

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedPrice) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= parseFloat(selectedPrice)
      );
    }
    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filteredProducts;
  };
  return (
    <>
      <div className="lg:px-20 lg:flex py-2 lg:justify-between  lg:mb-4">
        <div className="lg:flex inline-block lg:px-0 px-4 lg:gap-2">
          <div className=" px-2 py-2 text-lg lg:my-0 my-2  rounded-md bg-blue-gray-200">
            <label htmlFor="category">Category : </label>
            <select
              className="px-2 py-1 rounded shadow-lg"
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All</option>
              <option value="dining-room">Dining-room</option>
              <option value="living-room">living-room</option>
              <option value="office-room">office-room</option>
              <option value="bed-room">bed-room</option>
              <option value="kids-room">kids-room</option>
              <option value="outdoor">outdoor</option>
              <option value="entertainment">entertainment</option>
              <option value="wall-art">wall-art</option>
            </select>
          </div>

         
          <div className="px-2 py-2 lg:my-0 my-2 text-lg rounded-md bg-blue-gray-200">
            <label htmlFor="price">Price : </label>
            <input
              className="rounded px-2"
              type="range"
              id="price"
              min="500"
              max="10000"
              step="500"
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
            />
            <span className="ml-2">₹{selectedPrice}</span>
          </div>
        </div>

      
        <div className="lg:px-2 py-1 text-black inline-block lg:mx-0 mx-4  rounded-md border border-black">
          <input
            placeholder="Search..."
            className="rounded  lg:px-2 px-7 py-2 lg:py-1"
            type="text"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className=" lg:grid lg:grid-cols-5 lg:px-20 lg:gap-7 lg:py-5">
        {applyFilters().map((e) => {
          return (
            <>
              <div class=" lg:w-64 lg:shadow-2xl border-4 lg:border bg-blue-gray-50 rounded-xl lg:mx-0 lg:my-0 my-4 mx-4 ">
                <img
                  src={e.image}
                  alt="Productimage"
                  class="lg:h-72 lg:w-64 object-cover rounded-t-xl"
                />

                <div class="px-4 py-3 lg:w-64">
                  <span class="text-black mr-3 uppercase text-xs">
                    {e.category}
                  </span>
                  <p class="text-lg font-bold text-black truncate block capitalize">
                    {e.name}
                  </p>
                  <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">
                    ₹{e.price}
                    </p>
                    <del>
                      <p class="text-sm text-gray-600 cursor-auto ml-2">₹199</p>
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
    </>
  );
}

export default Products;
