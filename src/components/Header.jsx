import React, { useState } from "react";
import { HEADER_LINKS } from "../static";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import SignIn from "./SingIn";
import Modal from "./Modal";
import SignUp from "./SignUp";

const Header = () => {
  const [dark, setDark] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  let toggleActions = () => {
    setSignIn((p) => !p);
    setSignUp((p) => !p);
  };

  const darkMode = () => {
    document.body.classList.toggle("dark");
    setDark(!dark);
  };

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

          <ul className="flex gap-5 items-center">
            {header_links}
            <li>
              <button
                onClick={() => setSignIn(true)}
                className="max-sm:text-md max-sm:text-nowrap max-sm:hidden rounded-lg bg-white text-blue-700 font-semibold py-2 px-6 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md"
              >
                Sign In
              </button>
            </li>
            <li>
              <button
                onClick={() => setSignUp(true)}
                className="max-sm:text-md max-sm:text-nowrap max-sm:hidden rounded-lg bg-white text-blue-700 font-semibold py-2 px-6 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md"
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
        </div>
      </div>
    </div>
  );
};

export default Header;
