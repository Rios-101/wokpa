"use client";

import React, { useState } from "react";
import PhoneIcon from "@/public/phoneIcon.svg";
import SignupIcon from "@/public/signupIcon.svg";
import LoginIcon from "@/public/loginIcon.svg";
import Image from "next/image";

function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed  z-30 inset-0 flex items-center justify-center">
      <div className="modal-content  bg-[#050505] p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center pb-3">
          {/* <p className="text-2xl font-bold">Modal Title</p> */}
          <button onClick={onClose} className="text-red-500 hover:text-red-700">
            Close
          </button>
        </div>
        <div className="flex items-center">
          <div>
            <h2 className="text-center text-white font-bold text-[20px]">
              Create An Account
            </h2>
            <button
              className="w-full my-2 group h-12 px-6 bg-white border-2 border-white rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-white active:bg-white"
            >
              <div className="relative flex items-center space-x-4 justify-center">
                <img
                  src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                  className="absolute left-0 w-5"
                  alt="google logo"
                />
                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                  Continue with Google
                </span>
              </div>
            </button>
            <button
              className="w-full my-2 group h-12 px-6 bg-white border-2 border-white rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-white active:bg-white"
            >
              <div className="relative flex items-center space-x-4 justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                  className="absolute left-0 w-5"
                  alt="google logo"
                />
                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                  Continue with Facebook
                </span>
              </div>
            </button>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-600 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-600 font-medium"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                  placeholder="********"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Sign Up
              </button>
            </form>
          </div>
          <div>
            <img
              src="/signup.png"
              alt="Image"
              width={230}
              height={200}
              className="w-full h-auto rounded-t-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const SearchBar = () => {
  const [isSignUpClicked, setIsSignUpClicked] = useState(false);

  const openModal = () => {
    setIsSignUpClicked(true);
  };

  const closeModal = () => {
    setIsSignUpClicked(false);
  };

  return (
    <div className="flex justify-between p-4 bg-[#272727]">
      <div className="relative w-[32rem]">
        <input
          className="w-full py-2 pl-10 pr-4 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          placeholder="Search by Podcast Name, Host name, Categories, Tags..."
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.5-4.5"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
      </div>
      <div className="flex gap-6">
        <button className="py-2 flex items-center gap-1 px-4 capitalize tracking-wide bg-black text-[#1EAEA3] font-medium rounded-2xl hover:bg-gray-700 focus:outline-none focus:bg-gray-700 shadow-[0_3px_10px_rgb(30,174,163,1)]">
          <Image src={PhoneIcon} alt="Discover" className="p-0 m-0" />
          Download the app
        </button>
        <div className="flex gap-2">
          <button
            onClick={openModal}
            className="py-2 flex items-center gap-1 px-4 capitalize tracking-wide text-white bg-[#1EAEA3] font-medium rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700 "
          >
            <Image src={LoginIcon} alt="Discover" className="p-0 m-0" />
            SIGN UP
          </button>
          <button className="bg-transparent flex items-center gap-1 hover:bg-[#1EAEA3] text-white font-semibold hover:text-white py-2 px-4 border-2 border-white hover:border-transparent rounded-lg">
            <Image src={SignupIcon} alt="Discover" className="p-0 m-0" />
            LOG IN
          </button>
        </div>
      </div>
      <Modal isOpen={isSignUpClicked} onClose={closeModal} />
    </div>
  );
};

export default SearchBar;
