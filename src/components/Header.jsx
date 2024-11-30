import React, { useState, useEffect } from "react";
import { HEADER_LINKS } from "../static";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SignIn from "./SingIn";
import Modal from "./Modal";
import SignUp from "./SignUp";

const Header = () => {
  const [dark, setDark] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleActions = () => {
    setSignIn((p) => !p);
    setSignUp((p) => !p);
  };

  const darkMode = () => {
    document.body.classList.toggle("dark");
    setDark(!dark);
  };

  // Menu avtomatik yopilishini kuzatish
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMenuOpen(false); // Avtomatik yopiladi, agar max-lg'dan o'tsa
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const header_links = HEADER_LINKS.map((item, inx) => (
    <li
      key={inx}
      className="item hover:text-[#1e8fffd4] transition duration-300 max-lg:hidden"
    >
      <a
        href="#"
        className="hover:underline font-medium text-lg px-3 py-1 rounded-md hover:bg-gray-100 transition duration-300"
      >
        {item.name}
      </a>
    </li>
  ));

  const mobileMenuLinks = HEADER_LINKS.map((item, inx) => (
    <li
      key={inx}
      className="item text-center hover:text-blue-500 transition duration-300 py-2"
    >
      <a
        href="#"
        className="font-medium text-lg px-3 py-1 hover:bg-gray-100 transition duration-300"
      >
        {item.name}
      </a>
    </li>
  ));

  return (
    <div className="h-20">
      {signIn && (
        <Modal close={() => setSignIn(false)}>
          <SignIn toggle={toggleActions} close={() => setSignIn(false)} />
        </Modal>
      )}
      {signUp && (
        <Modal close={() => setSignUp(false)}>
          <SignUp toggle={toggleActions} close={() => setSignUp(false)} />
        </Modal>
      )}

      <div className="fixed header h-20 w-full bg-gradient-to-r bg-blue-700 text-white shadow-md dark:bg-slate-800">
        <div className="container h-full flex items-center justify-between px-6">
          <a href="https://www.youtube.com">
            <img
              className="w-[130px] rounded-lg shadow-lg"
              src="https://nwafoundation.org/wp-content/uploads/2017/04/FedEx-Logo-PNG-Transparent.png"
              alt="logo"
            />
          </a>

          <ul className="hidden md:flex gap-5 items-center">
            {header_links}
            <li>
              <button
                onClick={() => setSignIn(true)}
                className="rounded-lg bg-white text-blue-700 font-semibold py-2 px-6 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md"
              >
                Sign In
              </button>
            </li>
            <li>
              <button
                onClick={() => setSignUp(true)}
                className="rounded-lg bg-white text-blue-700 font-semibold py-2 px-6 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md"
              >
                Sign Up
              </button>
            </li>
            <li>
              {dark ? (
                <button
                  onClick={darkMode}
                  className="rounded-full bg-white text-black p-3 hover:bg-blue-500 shadow-lg transition duration-300 hover:text-yellow-400"
                >
                  <MdDarkMode size={20} />
                </button>
              ) : (
                <button
                  onClick={darkMode}
                  className="rounded-full bg-gray-800 text-white p-3 hover:bg-gray-700 shadow-lg transition duration-300"
                >
                  <CiLight size={20} className="font-bold" />
                </button>
              )}
            </li>
          </ul>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden text-white"
          >
            {menuOpen ? (
              <AiOutlineClose size={25} />
            ) : (
              <AiOutlineMenu size={25} />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-20 right-0 w-1/2 bg-white shadow-lg dark:bg-slate-800">
          <ul className="flex flex-col items-center py-4 gap-3 text-gray-700 dark:text-gray-200">
            {mobileMenuLinks}
            <li>
              <button
                onClick={() => setSignIn(true)}
                className="max-lg:hidden max-md:block w-full text-center py-2 px-3 bg-blue-600 text-white font-semibold rounded-md shadow-md"
              >
                Sign In
              </button>
            </li>
            <li>
              <button
                onClick={() => setSignUp(true)}
                className="max-lg:hidden max-md:block w-full text-center py-2 px-3 bg-blue-600 text-white font-semibold rounded-md shadow-md"
              >
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
