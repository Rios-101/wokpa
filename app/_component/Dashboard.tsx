import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Image from "next/image";
import Star from "@/public/star.svg";
import Tag from "@/public/tag.svg";

const Dashboard = () => {
  return (
    <div className="w-[100%] lg:w-[80%]  bg-[#212121]">
      <SearchBar />

      <div className="pt-9 pl-8">
        <div className="flex gap-2 items-center">
          <Image src={Star} alt="Discover" className="p-0 m-0" />
          <h2 className=" text-white font-bold text-[20px]">
            Pick of the week
          </h2>
        </div>

        <div className="flex">
          <div className="relative w-1/2 h-96 rounded-2xl overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('/pode1.png')`,
              }}
            ></div>
            <button className="absolute flex gap-2 items-center bottom-0 right-0 m-8 bg-[#7B61FF] hover:bg-[#7B61FF] text-white font-bold py-2 px-4 rounded-xl">
              Listen Now
              <img src="/play.png" alt="Play" className="p-0 m-0" />
            </button>
          </div>

          <div className="w-1/2 overflow-x-auto">
            <h2 className="text-white px-4 py-2 font-bold text-2xl">
              Top Podcasts
            </h2>
            <div className="flex space-x-4 p-4">
              <div className=" bg-[#303030] rounded-lg shadow-lg">
                <img
                  src="/img1.png"
                  alt="Image"
                  width={230}
                  height={200}
                  className="w-[230px] h-[150px]  rounded-t-lg"
                />
                <div className="w-[240px] px-6 py-4">
                  <div className="font-bold text-xl text-white mb-2">WTF</div>
                  <p className="text-white text-base">By: Marc Maron</p>
                </div>
                <div className="flex gap-2 items-center  px-6 py-4">
                  <Image src={Tag} alt="Discover" className="p-0 m-0" />
                  <h2 className="">Entertainment</h2>
                </div>
              </div>
              <div className=" bg-[#303030] rounded-lg shadow-lg">
                <img
                  src="/img3.png"
                  alt="Image"
                  width={230}
                  height={200}
                  className="w-[230px] h-[150px]  rounded-t-lg"
                />
                <div className="w-[240px] px-6 py-4">
                  <div className="font-bold text-xl text-white mb-2">
                    The Joe Rogan Exper...
                  </div>
                  <p className="text-white text-base">By: Joe Rogan</p>
                </div>
                <div className="flex gap-2 items-center  px-6 py-4">
                  <Image src={Tag} alt="Discover" className="p-0 m-0" />
                  <h2 className="">Entertainment</h2>
                </div>
              </div>
              <div className=" bg-[#303030] rounded-lg shadow-lg">
                <img
                  src="/img2.png"
                  alt="Image"
                  width={230}
                  height={200}
                  className="w-[230px] h-[150px]  rounded-t-lg"
                />
                <div className="w-[240px] px-6 py-4">
                  <div className="font-bold text-xl text-white mb-2">
                    How Did Things Ge
                  </div>
                  <p className="text-white text-base">By: Mike & May</p>
                </div>
                <div className="flex gap-2 items-center  px-6 py-4">
                  <Image src={Tag} alt="Discover" className="p-0 m-0" />
                  <h2 className="">Entertainment</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
