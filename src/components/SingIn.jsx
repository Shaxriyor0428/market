import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { toast, Bounce } from "react-toastify";

const SignIn = ({ toggle, close }) => {
  const handleForm = (e) => {
    e.preventDefault();
    toast("Wow you have successfully signed in", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce, 
    });

    close();
  };
  const [open, setOpen] = useState(false);
  return (
    <div className="dark:bg-slate-800 max-w-[400px] p-6  bg-white rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl">
      <div className="flex flex-col gap-3 mb-6 dark:text-white">
        <button
          onClick={close}
          className="absolute top-5 right-7 p-2 rounded-full bg-gray-300"
        >
          <MdOutlineCancel
            size={22}
            className="text-gray-600 bg-gray-300 rounded-full"
          />
        </button>
        <h2 className="text-center text-3xl font-bold text-blue-600 dark:text-white">
          Sign In
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-white">
          Stay updated on your{" "}
          <span className="font-semibold text-blue-500">
            professional world
          </span>
        </p>
      </div>
      <form action="#" onSubmit={handleForm}>
        <div className="flex flex-col gap-5">
          <input
            required
            className="w-full outline-none rounded-lg py-3 px-5 border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            type="text"
            placeholder="Username"
            id="username"
          />
          <input
            required
            className="w-full outline-none rounded-lg py-3 px-5 border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            type="password"
            placeholder="Password"
            id="password"
          />
        </div>
        <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all">
          Sign In
        </button>
      </form>
      <p className="mt-4 text-center text-gray-600 dark:text-white text-sm">
        Don't have an account?{" "}
        <a
          onClick={toggle}
          href="#"
          className="text-blue-500 font-semibold hover:underline transition duration-300"
        >
          Sign up here
        </a>
      </p>
    </div>
  );
};

export default SignIn;
