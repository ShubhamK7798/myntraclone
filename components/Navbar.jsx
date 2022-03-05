import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mobileSidebar, user } from "../redux/userslice";
import {GrMenu} from 'react-icons/gr'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineShoppingCart,AiOutlineClose } from 'react-icons/ai'
import NavbarLinks from "./NavbarLinks";
import SideBarMobile from "./SideBarMobile";

const Navbar = () => {
  const dispatch = useDispatch();

  const selector = useSelector((state) => state.user.loggedUser);
  const selectorMobile = useSelector((state) => state.user.mobileSidebar);
  const selectorCartItems = useSelector((state) => state.cart.cartItems);


  const [mouse, setMouse] = useState();
  const router = useRouter();

  const handlemouseenter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMouse(true);
  };
  const handlemouseleave = (e) => {
    e.preventDefault();

    e.stopPropagation();
    setMouse(false);
  };

  const handleLogout = () => {
    dispatch(user(null));
    router.push("/");
  };

  

  return (
    <header className="flex justify-between max-w-[1500px] items-center z-50 sticky top-0 mx-auto  w-screen  p-6  bg-white">
       <SideBarMobile/>


      {/* left */}
      <div className="flex lg:space-x-12">
        <i onClick={()=>dispatch(mobileSidebar())} className="text-3xl mr-8 lg:hidden cursor-pointer">
          {!selectorMobile ? <GrMenu/> : <AiOutlineClose/>}
        </i>
        <Link href="/">
          <div className="relative w-10 h-8 cursor-pointer ">
            <Image src="/myntra.png" objectFit="contain" layout="fill" />
          </div>
        </Link>

        <nav className="hidden lg:flex lg:space-x-8 font-semibold">
          <NavbarLinks  className=' hover:underline underline-offset-2 ' selector={selector}/>
        
        </nav>
      </div>

      {/* right */}
      <div className=" ml-28 pr-8 flex space-x-4 font-semibold flex-grow justify-end items-center">
        <div className="border bg-gray-50 p-2 hidden lg:flex flex-grow text-xs ">
          <input
            type="text"
            name="search"
            className="outline-none w-full bg-transparent"
            placeholder="Search for products,brands and more"
          />
        </div>
        <div
          onMouseEnter={handlemouseenter}
          onMouseLeave={handlemouseleave}
          className="cursor-pointer relative"
        >
          <div className="relative rounded-full w-10 h-10 overflow-hidden flex items-center justify-center p-2">
            {selector?.avatar ? (
              <Image src={selector.avatar} objectFit="cover" layout="fill" />
            ) : (
              <i className="text-3xl"><CgProfile/></i>
            )}
          </div>

          {/* Profile Modal */}

          <div
            className={`${
              mouse ? `flex flex-col space-y-4 p-4 items-start` : `hidden`
            } bg-white h-fit w-32   absolute top-10  `}
          >
            {selector?._id ? (
              <button
                className="bg-red-400 py-1 px-3 shadow-xl font-semibold rounded-md"
                onClick={handleLogout}
              >
                LogOut
              </button>
            ) : (
              <>
                <button
                  className="bg-red-400 py-1 px-3 shadow-xl font-semibold rounded-md"
                  onClick={() => router.push("/login")}
                >
                  Login
                </button>
                <button
                  className="bg-red-400 py-1 px-3 shadow-xl font-semibold rounded-md"
                  onClick={() => router.push("/register")}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
          {/* Profile Ends */}

        <div className="cursor-pointer hidden lg:block ">Wishlist</div>
        <div onClick={()=>router.push('/cart')} className="cursor-pointer relative text-3xl"><AiOutlineShoppingCart/>
        <div className={`${selectorCartItems.length ? `absolute` : `hidden`} -top-3 -right-3 bg-orange-500 text-white flex-shrink-0 w-6 text-base cursor-pointer h-6 rounded-full flex justify-center items-center`}>
          {selectorCartItems.length}
        </div>

        
        
        </div>
      </div>
    </header>
  );
};

export default Navbar;
