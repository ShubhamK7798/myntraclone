import React from "react";
import { useSelector } from "react-redux";
import NavbarLinks from "./NavbarLinks";

const SideBarMobile = () => {
  const selector = useSelector((state) => state.user.loggedUser);
  const selectorMobile = useSelector((state) => state.user.mobileSidebar);

  return (
    <div
      className={`${
        selectorMobile ? `translate-x-0` : `-translate-x-[200vw] -z-40`
      } fixed transition-all duration-300 ease-in-out w-full right-0 top-20 bg-black/50 h-full z-40 `}
    >
      <nav className="bg-white w-2/3 flex flex-col gap-y-4 h-full pl-8 font-semibold">
        <NavbarLinks selector={selector} />
      </nav>
    </div>
  );
};

export default SideBarMobile;
