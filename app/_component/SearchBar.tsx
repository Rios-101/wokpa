"use client";

import React, { useState } from "react";
import PhoneIcon from "@/public/phoneIcon.svg";
import SignupIcon from "@/public/signupIcon.svg";
import LoginIcon from "@/public/loginIcon.svg";
import Image from "next/image";
import SignUp from "./SignUp";
import Login from "./Login";

function Modal({
  isOpen,
  onClose,
  content,
}: {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed z-30 inset-0 flex items-center justify-center">
      <div className="modal-content bg-[#050505] p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center pb-3">
          <button onClick={onClose} className="text-red-500 hover:text-red-700">
            Close
          </button>
        </div>
        {content}
      </div>
    </div>
  );
}

const SearchBar = () => {
  const [isSignUpClicked, setIsSignUpClicked] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  const openModal = (isSignUp: any) => {
    if (isSignUp) {
      setIsSignUpClicked(true);
    } else {
      setIsLoginClicked(true);
    }
  };

  const closeModal = () => {
    setIsSignUpClicked(false);
    setIsLoginClicked(false);
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
          <button
            onClick={() => openModal(false)}
            className="bg-transparent flex items-center gap-1 hover:bg-[#1EAEA3] text-white font-semibold hover:text-white py-2 px-4 border-2 border-white hover:border-transparent rounded-lg"
          >
            <Image src={SignupIcon} alt="Discover" className="p-0 m-0" />
            LOG IN
          </button>
        </div>
      </div>
      <Modal
        isOpen={isSignUpClicked || isLoginClicked}
        onClose={closeModal}
        content={isLoginClicked ? <Login /> : <SignUp />}
      />
    </div>
  );
};

export default SearchBar;
