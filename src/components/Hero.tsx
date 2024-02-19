import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row container m-auto md:w-screen p-20 min-h-dvh rounded-xl">
      <div className="hidden rounded-l-xl shadow-2xl md:flex md:flex-col items-center justify-center md:w-[46.4%] bg-white">
        <h1 className="text-blue-400 font-bold text-xl lg:text-2xl xl:text-3xl">
          Sign in to Account
        </h1>
        <div className="border border-blue-400 w-10 lg:w-12 xl:w-14 mt-1 mb-4"></div>
        <div className="flex justify-center my-2">
          <a
            href="#"
            className="border-2 border-blue-200 rounded-full transition-all duration-500 hover:shadow-xl p-3 mx-1"
          >
            <FaFacebookF className="text-sm " />
          </a>
          <a
            href="#"
            className="border-2 border-blue-200 rounded-full transition-all duration-500 hover:shadow-xl p-3 mx-1"
          >
            <FaLinkedinIn className="text-sm" />
          </a>
          <a
            href="#"
            className="border-2 border-blue-200 rounded-full transition-all duration-500 hover:shadow-xl p-3 mx-1"
          >
            <FaGoogle className="text-sm" />
          </a>
        </div>
        <p className="text-blue-400 text-sm my-2">or use your email account</p>
        <div className="flex flex-col items-center">
          <div className="w-48 lg:w-60 flex items-center bg-gray-200 p-2 mb-3">
            <FaRegEnvelope className="text-sm text-gray-400 lg:m-2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="text-sm bg-gray-200 outline-none flex-1"
            />
          </div>
          <div className="w-48 lg:w-60 flex items-center bg-gray-200 p-2">
            <MdLockOutline className="text-sm text-gray-400 lg:m-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="text-sm bg-gray-200 outline-none flex-1"
            />
          </div>
          <div className="flex justify-between mt-3 w-40 lg:w-60">
            <label className="flex items-center text-blue-400 text-xs">
              <input type="checkbox" name="remember" className="mr-1 text-blue-400" />
              Remember
            </label>
            <a href="#" className="text-xs text-blue-400">Forgot Password</a>
          </div>
          <button
          type="submit"
          className="text-blue-400 mt-6 font-bold transition-all duration-500 hover:bg-blue-400 hover:text-white hover:shadow-xl rounded-full border border-blue-400 px-6 py-2"
        >
          Sign In
        </button>
        </div>
      </div>
      <div className="hidden rounded-r-xl shadow-2xl md:flex md:flex-col items-center justify-center md:w-[52.6%] bg-blue-400">
        <h1 className="text-white font-bold text-2xl lg:text-3xl xl:text-4xl">
          Hello, Friend!
        </h1>
        <div className="border border-white w-10 lg:w-12 xl:w-14 mt-1 mb-4"></div>
        <p className="text-white w-full font-light text-center px-4 text-sm lg:textmd xl:text-lg">
          Fill up personal information and start journey with us
        </p>
        <button
          type="submit"
          className="text-white transition-all duration-500 hover:bg-white hover:text-blue-400 hover:shadow-xl mt-6 font-bold border border-white rounded-full px-6 py-2 text-lg lg:tex-2xl xl:text-3xl"
        >
          Get Started
        </button>
      </div>
      {/* Mobile Display ONLY */}
      <div className="md:hidden container mx-auto flex flex-col w-64 bg-blue-400 items-center justify-center rounded-xl py-40">
        <h1 className="text-white text-center font-bold text-xl">
          Hello, Friend!
        </h1>
        <div className="w-8 border border-white mt-1 mb-4"></div>
        <p className="text-white font-light text-center px-4 text-sm">
          Fill up personal information and start journey with us
        </p>
        <button
          type="submit"
          className="text-white mt-6 font-bold border border-white rounded-full transition-all duration-500 hover:bg-white hover:text-blue-400 hover:shadow-xl px-6 py-2 "
        >
          Get Started
        </button>
        <p className="text-white font-light text-center  px-4 text-sm mt-1">
          or
        </p>
        <button
          type="submit"
          className="text-blue-400 bg-white mt-2 font-bold transition-all duration-500 hover:bg-blue-400 hover:border hover:border-white hover:text-white hover:shadow-xl rounded-full px-6 py-2"
        >
          Sign In
        </button>
      </div>
    </section>
  );
};

export default Hero;
