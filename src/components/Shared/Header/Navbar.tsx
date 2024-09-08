'use client';
import { useUser } from '@clerk/nextjs';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import cartIcon from '@/images/cartIcon.png';
import logo from '@/images/logo.png';
import { ChevronDown, MapPin, SearchIcon } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from '@clerk/nextjs';

const Navbar = () => {
  const { user } = useUser();
  const { getTotalItems } = useCart();
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    setTotalItems(getTotalItems());
  }, [getTotalItems]);

  return (
    <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-3 md:gap-5 px-4">
        {/* logo */}
        <Link
          href={'/'}
          className="cursor-pointer duration-300 flex items-center justify-center h-[70%]"
        >
          <Image className="w-28 object-cover mt-1" src={logo} alt="logoImg" />
        </Link>
        {/* delivery */}
        <div className=" cursor-pointer duration-300 items-center justify-center h-[70%] hidden xl:inline-flex gap-1">
          <MapPin />
          <div className="text-xs">
            <p>Deliver to</p>
            <p className="text-white font-bold uppercase">Egypt</p>
          </div>
        </div>
        {/* serchbar */}
        <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
          <input
            className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow"
            type="text"
            placeholder="Search products"
          />
          <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>
        {/* signin */}
        <SignedIn>
          <SignOutButton>
            <div className="text-xs text-gray-100 flex flex-col justify-center cursor-pointer duration-300 h-[70%]">
              <p>Hello, {user?.firstName || user?.username}</p>
              <p className="text-white font-bold flex items-center">
                Account & Lists{' '}
                <span>
                  <ChevronDown />
                </span>
              </p>
            </div>
          </SignOutButton>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <div className="text-xs text-gray-100 flex flex-col justify-center cursor-pointer duration-300 h-[70%]">
              <p>Hello, sign in</p>
              <p className="text-white font-bold flex items-center">
                Account & Lists{' '}
                <span>
                  <ChevronDown />
                </span>
              </p>
            </div>
          </SignInButton>
        </SignedOut>

        {/* fovorite */}
        <Link
          href={'/favorite'}
          className="hidden sm:flex text-xs text-gray-100 flex-col justify-center cursor-pointer duration-300 h-[70%] relative"
        >
          <p>Marked</p>
          <p className="text-white font-bold">& Favorite</p>
          {/* {favoriteData.length > 0 && (
            <span className="absolute right-2 top-2 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-amazon_yellow">
              {favoriteData.length}
            </span>
          )} */}
        </Link>
        {/* cart */}
        <Link
          href={'/cart'}
          className="flex items-center cursor-pointer duration-300 h-[70%] relative"
        >
          <Image
            className="w-auto object-cover h-8"
            src={cartIcon}
            alt="cartImg"
          />
          <span className="absolute text-amazon_yellow text-sm top-2 left-[20px] font-semibold">
            {totalItems}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
