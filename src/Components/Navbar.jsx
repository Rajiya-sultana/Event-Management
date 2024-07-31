import React, { useState } from "react";
import logo from "../assets/logo.svg";
import profile_icon from "../assets/profile_icon.svg";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

import { Link } from "react-router-dom";

const Navbar = () => {

  const [menu, setMenu] = useState("");
  const [isSideMenuOpen, setSideMenu] = useState(false);
  return (
    <div className="flex justify-between p-4  lg:px-11">
      <div className="nav-logo flex  items-center gap-2">
        <RiMenu3Line
          onClick={() => setSideMenu(true)}
          className=" text-3xl cursor-pointer lg:hidden "
        />
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div>
        <ul
          className="hidden lg:flex items-center gap-6 xl:gap-12 pt-5 justify-center font-bold text-gray-600
      text-lg   xl:text-xl cursor-pointer "
        >
          <li
            onClick={() => {
              setMenu("wedding");
            }}
          >
            <Link to="/wedding">Wedding</Link>
            {menu === "wedding" ? (
              <hr className="border-none w-[80%] h-1 rounded-xl bg-customRed" />
            ) : (
              <></>
            )}
          </li>
          <li
            onClick={() => {
              setMenu("parties");
            }}
          >
            <Link to="/parties">Parties</Link>
            {menu === "parties" ? (
              <hr className="border-none w-[80%] h-1 rounded-xl bg-customRed" />
            ) : (
              <></>
            )}
          </li>
          <li
            onClick={() => {
              setMenu("meetups");
            }}
          >
            <Link to="/meetups">Meetups</Link>
            {menu === "meetups" ? (
              <hr className="border-none w-[80%] h-1 rounded-xl bg-customRed" />
            ) : (
              <></>
            )}
          </li>
          <li
            onClick={() => {
              setMenu("seminars");
            }}
          >
            <Link to="/seminars">Seminars</Link>
            {menu === "seminars" ? (
              <hr className="border-none w-[80%] h-1 rounded-xl bg-customRed" />
            ) : (
              <></>
            )}
          </li>
          <li
            onClick={() => {
              setMenu("aboutus");
            }}
          >
            <Link to="/aboutus">About Us</Link>
            {menu === "aboutus" ? (
              <hr className="border-none w-[80%] h-1 rounded-xl bg-customRed" />
            ) : (
              <></>
            )}
          </li>
          <li
            onClick={() => {
              setMenu("contactus");
            }}
          >
            <Link to="/contactus">Contact Us</Link>
            {menu === "contactus" ? (
              <hr className="border-none w-[80%] h-1 rounded-xl bg-customRed" />
            ) : (
              <></>
            )}
          </li>
        </ul>
      </div>
      <div
        className={`fixed h-full w-screen bg-black/50 backdrop-blur-sm top-0 right-0 ${
          isSideMenuOpen ? "translate-x-0" : "-translate-x-full"
        } z-50 transition-transform duration-300`}
      >
        <div className="text-black bg-white flex-col lg:flex absolute left-0 top-0 h-1/2 p-8 gap-8 z-50 flex w-56">
          <IoCloseSharp
            onClick={() => setSideMenu(false)}
            className="mt-0 mb-8 text-3xl cursor-pointer absolute right-3 top-3"
          />
          <ul className="font-bold text-gray-600 text-xl cursor-pointer flex flex-col gap-3">
            <li className="pt-7">
              <Link to="/wedding">Wedding</Link>
            </li>
            <li>
              <Link to="/parties">Parties</Link>
            </li>
            <li>
              <Link to="/meetups">Meetups</Link>
            </li>
            <li>
              <Link to="/seminars">Seminars</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center lg:gap-11 gap-3">
        <Link to="/planyourevent">
          <button className="bg-customRed hover:bg-customColor text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-xl">
            Plan Your Event
          </button>
        </Link>
        <Link to="/login">
          <img src={profile_icon} alt="profile" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

