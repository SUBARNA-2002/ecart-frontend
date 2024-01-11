import { Button } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Mid() {
  const navigate = useNavigate();
  const handleProduct=()=>{
    navigate('/products')
  }
  return (
    <>
      <div className=" lg:py-5 lg:h-[70vh] lg:px-20">
        <div className="font-bold lg:mx-0 mx-4  text-3xl border-b-4 inline-block border-pink-600 ">
          Limited Offer
        </div>
        <div className="lg:flex lg:gap-6 py-2 lg:px-0 px-4 lg:py-2">
          <div>
            <img
            className="h:[100%] lg:h-[90%] w-[100%] rounded-lg"
              src="https://images.furnituredealer.net/img/dealer/-1/upload/getstarted/getstarted-livingroom.png"
              
              alt=""
            />
            <div className="text-lg font-bold inline-block mt-2">
              Living room furniture
            </div>
            <div className="font-medium">Upto 50% Off</div>
            <div className="py-2">
              <Button onClick={handleProduct} size="sm" color="pink" variant="gradient" >Shop Now</Button>
            </div>
          </div>
          <div>
            <img
             className="h:[100%] lg:h-[90%] w-[100%] rounded-lg"
              src="https://images.furnituredealer.net/img/dealer/-1/upload/getstarted/getstarted-bedroom.png"
              
              alt="banner"
            />
            <div className="text-lg font-bold inline-block mt-2">
              Bedroom furniture
            </div>
            <div className="font-medium">Upto 50% Off</div>
            <div className="py-2">
              <Button onClick={handleProduct} size="sm" color="pink" variant="gradient" >Shop Now</Button>
            </div>
          </div>
          <div>
            <img
             className="h:[100%] lg:h-[90%] w-[100%] rounded-lg"
              src="https://images.furnituredealer.net/img/dealer/-1/upload/getstarted/getstarted-diningroom.png"
              
              alt="banner"
            />
            <div className="text-lg font-bold inline-block mt-2">
              Dining room furniture
            </div>
            <div className="font-medium">Upto 50% Off</div>
            <div className="py-2">
              <Button onClick={handleProduct} size="sm" color="pink" variant="gradient" >Shop Now</Button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="mt-5 lg:px-20">
        <div className="text-center font-semibold text-3xl">
         SHOP FURNITURE AT URBAN INTERIORS
        </div>
        <img
          className="lg:img-fluid my-2 lg:h-[50vh] h-full w-full"
          src="https://images.furnituredealer.net/img/dealer/-1/upload/getstarted/getstartedhero.png"
          alt="error"
        />
      </div>
      <hr />
    </>
  );
}

export default Mid;
