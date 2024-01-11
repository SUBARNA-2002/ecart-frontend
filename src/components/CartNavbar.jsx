import React  from "react";
import logo from "../assests/logo.png";
import {
  Collapse,
  Navbar,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function CartNavbar() {

  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const handleHome = () => {
    navigate("/");
  };
  const handleProduct = () => {
    navigate("/products");
  };
  const handleCart = () => {
    navigate("/cart");
  };
 


//   const handleLogout = () => {
//     sessionStorage.removeItem("user_id");
//     sessionStorage.removeItem("user_name");
//     navigate('/')
//   };

//   const userId = sessionStorage.getItem("user_id");
//   console.log(userId);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" color="black" className="p-1 font-normal">
        <div onClick={handleHome}  className="flex items-center cursor-pointer">
          Home
        </div>
      </Typography>
      <Typography
        as="li"
        // variant="small"
        color="black"
        className="p-1 font-normal"
      >
        <div
          onClick={handleProduct}
          className=" cursor-pointer flex items-center"
        >
          Products
        </div>
      </Typography>
      <Typography
        as="li"
        // variant="big"
        color="black"
        className="p-1 font-normal"
      >
        <div onClick={handleCart} className="flex items-center cursor-pointer">
          Cart
        </div>
      </Typography>
      <Typography
        as="li"
        // variant="medium"
        color="black"
        className="p-1 font-normal"
      >
        <div className="flex cursor-pointer items-center">Contact Us</div>
      </Typography>
    </ul>
  );
  

  return (
    <div className=" max-h-[768px] w-full lg:w-full lg:px-20 px-10 py-2  ">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-0 py-2 lg:px-0 lg:py-2">
        <div className="flex items-center justify-between text-pink-600">
          <Typography as="a" className="mr-4 cursor-pointer py-1.5 font-medium">
            <img className="h-10" src={logo} alt="logo" />
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-[20rem] hidden lg:block">{navList}</div>

            <div className="flex items-center gap-x-1">
             
                  <Button
                    
                    variant="text"
                    size="md"
                    color="pink"
                    className="hidden lg:inline-block"
                  >
                    <span>Log In</span>
                  </Button>
                  <Button
                    
                    variant="gradient"
                    color="pink"
                    size="md"
                    className="hidden lg:inline-block"
                  >
                    <span>Sign in</span>
                  </Button>
               
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span >Log In</span>
            </Button>
            <Button
              fullWidth
              variant="gradient"
              size="sm"
              color="pink"
              className=""
            >
              <span >Sign in</span>
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
