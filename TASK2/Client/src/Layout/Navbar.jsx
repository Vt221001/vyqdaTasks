import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  return <div className="w-full text-4xl flex gap-2 px-2 items-center text-white font-semibold bg-black h-16">
  <div>
  <HiOutlineMenuAlt2 />
  </div>
    <div>
    Notes
    </div>
  </div>;
};

export default Navbar;
