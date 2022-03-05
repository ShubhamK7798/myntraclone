import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { mobileSidebar } from "../redux/userslice";
import NavbarLinks from "./NavbarLinks";

const SideBarMobile = () => {
  const selector = useSelector((state) => state.user.loggedUser);
  const selectorMobile = useSelector((state) => state.user.mobileSidebar);
  const dispatch = useDispatch();


  return (
    <div
      className={`${
        selectorMobile ? `translate-x-0` : `-translate-x-full -z-40`
      } transform fixed transition-all lg:hidden duration-300 ease-out w-full right-0 top-20  h-full z-40 `}
    >
      <div  onClick={()=>dispatch(mobileSidebar())} className="bg-black/50 -z-40  absolute inset-0"   />
      <nav  className="bg-white w-2/3 sm:w-1/3 flex flex-col gap-y-2 h-full pt-4 px-4  font-semibold ">
        <NavbarLinks onClick={()=>dispatch(mobileSidebar())} selector={selector} className='hover:bg-gray-200 hover:underline underline-offset-2 p-4 rounded-md'/>
      </nav>
    </div>
  );
};

export default SideBarMobile;
