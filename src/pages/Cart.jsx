import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Cart({ cartdata, setCartData }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);

  const handleOpen = () => setOpen(!open);
  const handleConfirm = () => {
    setCartData([]);
    toast.success("Product purchased Successfull", {
      position: "bottom-right",
    });
    setOpen(!open);
  };
  const handleIncreaseQuantity = () => setQuantity(quantity + 1);
  const handleDecreaseQuantity = () =>
    setQuantity(quantity > 1 ? quantity - 1 : 1);

  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  const calculateTotal = () => {
    let total = 0;
    cartdata.forEach((e) => {
      total += calculateSubtotal(e.price, quantity);
    });
    return total;
  };
  const handleProduct = () => {
    navigate("/products");
  };

  return (
    <>
      <section className="flex items-center bg-stone-200  font-poppins dark:bg-gray-700 ">
        <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
          <div className="p-8 bg-gray-50 dark:bg-gray-800">
            <h2 className="mb-8 text-4xl font-bold dark:text-gray-400">Cart</h2>
            {cartdata.length !== 0 ? (
              <>
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full px-4 mb-8 xl:w-8/12 xl:mb-0">
                    <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                      <div className="w-full md:block hidden px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                        <h2 className="font-bold text-gray-500 dark:text-gray-400">
                          Product name
                        </h2>
                      </div>
                      <div className="hidden px-4 lg:block lg:w-2/12">
                        <h2 className="font-bold text-gray-500 dark:text-gray-400">
                          Price
                        </h2>
                      </div>
                      <div className="hidden md:block px-4 md:w-1/6 lg:w-2/12 ">
                        <h2 className="font-bold text-gray-500 dark:text-gray-400">
                          Quantity
                        </h2>
                      </div>
                      <div className="hidden md:block px-4 text-right md:w-1/6 lg:w-2/12 ">
                        <h2 className="font-bold text-gray-500 dark:text-gray-400">
                          {" "}
                          Subtotal
                        </h2>
                      </div>
                    </div>
                    <div className="py-4 mb-8 border-t border-b  border-gray-200 dark:border-gray-700">
                      {cartdata.map((e) => {
                        return (
                          <>
                            <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                              <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                                <div className="flex flex-wrap items-center -mx-4">
                                  <div className="w-full px-4 mb-3 md:w-1/3">
                                    <div className="w-full h-96 md:h-24 md:w-24">
                                      <image
                                        src={e.image}
                                        alt="cart product image"
                                        className="object-cover w-full h-full"
                                      />
                                    </div>
                                  </div>
                                  <div className="w-2/3 px-4">
                                    <h2 className="mb-2 text-xl font-bold dark:text-gray-400">
                                      {e.name}
                                    </h2>
                                    <p className="text-gray-500 dark:text-gray-400 ">
                                      {e.category}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="hidden px-4 lg:block lg:w-2/12">
                                <p className="text-lg font-bold text-blue-500 dark:text-gray-400">
                                  {e.price}
                                </p>
                                <span className="text-xs text-gray-500 line-through dark:text-gray-400">
                                  $1500
                                </span>
                              </div>
                              <div className="w-auto px-4 md:w-1/6 lg:w-2/12 ">
                                <div className="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-200 rounded-md dark:border-gray-700 ">
                                  <button
                                    onClick={handleDecreaseQuantity}
                                    className="py-2 hover:text-gray-700 dark:text-gray-400"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={16}
                                      fill="currentColor"
                                      className="bi bi-dash"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                    </svg>
                                  </button>
                                  <input
                                    type="number"
                                    className="w-12 px-2 py-4 text-center border-0 rounded-md dark:bg-gray-800 bg-gray-50 dark:text-gray-400 md:text-right"
                                    placeholder={quantity}
                                  />
                                  <button
                                    onClick={handleIncreaseQuantity}
                                    className="py-2 hover:text-gray-700 dark:text-gray-400"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={16}
                                      fill="currentColor"
                                      className="bi bi-plus"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                                <p className="text-lg font-bold text-blue-500 dark:text-gray-400">
                                  $
                                  {calculateSubtotal(e.price, quantity).toFixed(
                                    2
                                  )}
                                </p>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="text-gray-700 dark:text-gray-400">
                        Apply Coupon
                      </span>
                      <input
                        type="text"
                        className="flex-1 px-8 py-4 font-normal placeholder-gray-300 border dark:border-gray-700 dark:placeholder-gray-500 md:flex-none md:mr-6 dark:text-gray-400 dark:bg-gray-800"
                        placeholder="x304k45"
                        required=""
                      />
                      <button className="flex-1 inline-block px-8 py-4 font-bold text-center text-gray-100 bg-blue-500 rounded-md hover:bg-blue-600 md:flex-none">
                        Apply
                      </button>
                    </div>
                  </div>
                  <div className="w-full px-4 xl:w-4/12">
                    <div className="p-6 border border-blue-100 dark:bg-gray-900 dark:border-gray-900 bg-blue-50 md:p-8">
                      <h2 className="mb-8 text-3xl font-bold text-gray-700 dark:text-gray-400">
                        Order Summary
                      </h2>

                      <div className="flex items-center justify-between pb-4 mb-4 ">
                        <span className="text-gray-700 dark:text-gray-400 ">
                          Shipping
                        </span>
                        <span className="text-xl font-bold text-gray-700 dark:text-gray-400 ">
                          Free
                        </span>
                      </div>
                      <div className="flex items-center justify-between pb-4 mb-4 ">
                        <span className="text-gray-700 dark:text-gray-400">
                          Order Total
                        </span>
                        <span className="text-xl font-bold text-gray-700 dark:text-gray-400">
                          ${calculateTotal().toFixed(2)}
                        </span>
                      </div>
                      <h2 className="text-lg text-gray-500 dark:text-gray-400">
                        We offer:
                      </h2>
                      <div className="flex items-center mb-4 ">
                        <div>
                          <img
                            src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png"
                            alt=""
                            className="object-cover h-16 mr-2 w-26"
                          />
                        </div>
                        <div>
                          <img
                            src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png"
                            alt=""
                            className="object-cover h-16 mr-2 w-26"
                          />
                        </div>
                        <div>
                          <img
                            src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png"
                            alt=""
                            className="object-cover h-16 mr-2 w-26"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between ">
                        <button
                          onClick={handleOpen}
                          className="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-blue-500 rounded-md hover:bg-blue-600"
                        >
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="text-center">
                  <div className="text-3xl font-body py-4">
                    {" "}
                    Your Cart is Empty
                  </div>
                  <Button
                    onClick={handleProduct}
                    size="lg"
                    type="gradiant"
                    color="pink"
                  >
                    Continue Shopping...{" "}
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Enter your Shipping Address </DialogHeader>
        <DialogBody>
          <div class="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
            <div class="flex flex-col gap-4 p-6">
              <form>
                <div class="relative h-11 w-full min-w-[200px]">
                  <input
                    required
                    class="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  />
                  <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Name
                  </label>
                </div>
                <div class="relative h-11 w-full min-w-[200px]">
                  <input
                    required
                    class="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  />
                  <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Email
                  </label>
                </div>
                <div class="relative h-30 w-full min-w-[200px]">
                  <textarea
                    required
                    rows={10}
                    class="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  />
                  <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Address
                  </label>
                </div>
              </form>
            </div>
            <div class="p-6 pt-0"></div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleConfirm}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default Cart;
