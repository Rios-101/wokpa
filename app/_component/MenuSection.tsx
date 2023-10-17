import React from "react";
import Logo from "@/public/logo.svg";
import Discover from "@/public/discover.svg";
import Categories from "@/public/categories.svg";
import Podcast from "@/public/podcast.svg";
import Top from "@/public/top.svg";
import Vector from "@/public/vector.svg";
import Heart from "@/public/heart.svg";
import Add from "@/public/add.svg";
import Menu from "@/public/menu.svg";
import Playlist from "@/public/playlist.svg";
import Played from "@/public/played.svg";
import Sub from "@/public/sub.svg";
import WokpaPod from "@/public/wokpaPod.svg";
import WokpaAds from "@/public/wokpaAds.svg";
import Read from "@/public/readBlog.svg";
import Image from "next/image";

const MenuSection = () => {
  return (
    <div className="w-[100%]  lg:w-[20%]  bg-[#303030]">
      <Image
        priority
        src={Logo}
        alt="Logo"
        className="pl-4"
        height={150}
        width={150}
      />
      <div>
        <div className="flex items-center">
          <Image src={Discover} alt="Discover" className="p-0 m-0" />
          <h2 className=" text-white font-bold text-[20px]">Discover</h2>
        </div>
        <div className="flex items-center">
          <Image src={Top} alt="Discover" className="p-0 m-0" />
          <h2 className=" text-white font-bold text-[20px]">Top 50 Podcasts</h2>
        </div>
        <div className="flex items-center">
          <Image src={Categories} alt="Discover" className="p-0 m-0" />
          <h2 className=" text-white font-bold text-[20px]">Categories</h2>
        </div>
        <div className="flex items-center">
          <Image src={Podcast} alt="Discover" className="p-0 m-0" />
          <h2 className=" text-white font-bold text-[20px]">
            Add Your Podcast
          </h2>
        </div>
      </div>

      <div>
        <div className="flex items-center pl-4">
          <h2 className=" text-white font-bold text-[20px]">Your Library</h2>
          <Image src={Vector} alt="Vector" className="pt-1 ml-2" />
        </div>
        <div>
          <div className="pl-4 flex items-center gap-6">
            <Image src={Heart} alt="Heart" className="pt-1 ml-2" />
            <Image src={Menu} alt="Menu" className="pt-1 ml-2" />
            <Image src={Add} alt="Add" className="pt-1 ml-2" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <Image src={Playlist} alt="Playlist" className="p-0 m-0" />
          <h2 className=" text-white font-bold text-[20px]">Your Playlist</h2>
        </div>
        <div className="flex items-center">
          <Image src={Played} alt="Played" className="p-0 m-0" />
          <h2 className=" text-white font-bold text-[20px]">Recently Played</h2>
        </div>
        <div className="flex items-center">
          <Image src={Sub} alt="Sub" className="p-0 m-0" />
          <h2 className=" text-white font-bold text-[20px]">
            Subscription & Hosts
          </h2>
        </div>
      </div>
      <div className="w-full border-t-2 mt-4 border-gray-300"></div>
      <div className="pl-4 flex flex-col gap-2 py-5">
        <div className="flex gap-2 items-center">
          <Image src={WokpaPod} alt="WokpaPod" className="p-0 m-0" />
          <h2 className=" text-white font-bold text-[15px]">
            Wokpa for podcasters
          </h2>
        </div>
        <div className="flex gap-2 items-center">
          <Image src={WokpaAds} alt="WokpaAds" className="p-0 m-0" />
          <h2 className=" text-white font-bold text-[15px]">
            Wokpa for advertisers
          </h2>
        </div>
        <div className="flex gap-2 items-center">
          <Image src={Read} alt="Read" className="p-0 m-0" />
          <h2 className=" text-white font-bold text-[15px]">Read our blogs</h2>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
