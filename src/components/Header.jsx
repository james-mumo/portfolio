import React, { useState } from "react";
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, ScrollLink } from "react-scroll";

const Header = () => {
  let Links = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-7xl text-opacity-50 shadow-md">
      <div className="justify-between items-center px-7 py-2 md:flex md:px-10">
        {/* logo section */}
        <div className="flex gap-1 items-center text-2xl font-bold cursor-pointer">
          <a href="/" className="pl-4">
            <span className="flex overflow-hidden gap-2 items-center cursor-pointer">
              <img
                src="./gitAvatar.png"
                alt="usernameInitialsIcon"
                className="object-cover rounded-full border-[2px] border-[#1ee0e0] w-[45px] h-[45px]"
              />

              <h1 className="text-[32px] text-primary">
                <span className="text-[#01d293] text-[38px] ">M</span>umo
              </h1>
            </span>
          </a>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute top-6 right-8 w-7 h-7 text-white cursor-pointer md:hidden"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static  md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-slate-400 sm:bg-transparent transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="my-7 font-semibold md:ml-8 md:my-0" key={link.name}>
              <Link
                to={link.link}
                activeClass="active"
                smooth={true}
                spy={true}
                className="text-white duration-500 cursor-pointer hover:text-primary"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="my-7 font-semibold md:ml-8 md:my-0">
            <a
              target="_blank"
              href="https://github.com/james-mumo"
              className="p-2 text-white rounded-md border border-teal-600 duration-500 cursor-pointer hover:text-primary"
            >
              See Github
            </a>
          </li>
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Header;
