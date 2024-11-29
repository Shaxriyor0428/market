import React from "react";
import { MdOutlineCancel } from "react-icons/md";

const SignUp = ({toggle,close}) => {
  return (
    <div className="dark:bg-slate-800 w-[400px] p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl">
      <div className="flex flex-col gap-3 mb-6">
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
          Sign Up
        </h2>
        <p className="dark:text-white text-center text-lg text-gray-600">
          Start your{" "}
          <span className="font-semibold text-blue-500">30-day free trial</span>{" "}
          today!
        </p>
      </div>
      <form action="#">
        <div className="flex flex-col gap-5">
          <input
            className="w-full outline-none rounded-lg py-3 px-5 border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            type="text"
            placeholder="Full Name"
            id="name"
          />
          <input
            className="w-full outline-none rounded-lg py-3 px-5 border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            type="email"
            placeholder="Email Address"
            id="email"
          />
          <input
            className="w-full outline-none rounded-lg py-3 px-5 border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            type="password"
            placeholder="Password"
            id="password"
          />
        </div>
        <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all">
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-center dark:text-white text-gray-600 text-sm">
        Already have an account?{" "}
        <a
          onClick={() => toggle()}
          href="#"
          className="text-blue-500 font-semibold hover:underline transition duration-300"
        >
          Log in here
        </a>
      </p>
    </div>
  );
};

export default SignUp;
