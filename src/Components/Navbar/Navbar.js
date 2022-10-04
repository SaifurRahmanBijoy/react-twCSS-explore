import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Products", path: "/products" },
    { id: 3, name: "Orders", path: "/orders" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "About Us", path: "/about" },
  ];
  return (
    <nav className='bg-slate-600 text-slate-100 w-full mb-3'>
      <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
      <ul className={`bg-slate-500 py-4 md:flex w-full justify-center absolute md:static duration-300 ease-in ${open?'top-6':'top-[-180px]'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
