import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { user } from "../redux/userslice";

const Navbar = () => {
  const dispatch = useDispatch();

  const selector = useSelector((state) => state.user.loggedUser);

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
    <header className="flex justify-between max-w-[1500px] items-center z-50 sticky top-0 mx-auto  w-screen  p-8  bg-white">
      {/* left */}
      <div className="flex space-x-12">
        <Link href="/">
          <div className="relative w-16 h-8 cursor-pointer">
            <Image src="/myntra.png" objectFit="contain" layout="fill" />
          </div>
        </Link>

        <nav className="hidden lg:flex lg:space-x-8 font-semibold">
          <Link href="/men">
            <a> Men</a>
          </Link>
          <Link href="/women">
            <a> Women</a>
          </Link>
          <Link href="/">
            <a> Kids</a>
          </Link>
          <Link href="/">
            <a> Living </a>
          </Link>
          <Link href="/">
            <a> Beauty</a>
          </Link>
          {selector?.admin ? (
            <Link href="/admin">
              <a>Admin</a>
            </Link>
          ) : (
            <Link href="/">
              <a>Studio</a>
            </Link>
          )}
        </nav>
      </div>

      {/* right */}
      <div className="hidden ml-28 pr-8 md:flex space-x-4 font-semibold flex-grow justify-end items-center">
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
          <div className="relative rounded-full w-10 h-10 overflow-hidden bg-red-200 flex items-center justify-center p-2">
            {selector?.avatar ? (
              <Image src={selector.avatar} objectFit="cover" layout="fill" />
            ) : (
              <h1>Profile</h1>
            )}
          </div>

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
        <div className="cursor-pointer">Wishlist</div>
        <div className="cursor-pointer">Bag</div>
      </div>
    </header>
  );
};

export default Navbar;
