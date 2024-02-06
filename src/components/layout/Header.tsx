"use client";
import logo from "@/../../public/logo.webp";
import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { UseSelector, useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Header = () => {
  const cartValue = useSelector((state: RootState) => state.cart.totalQuantity);
  return (
    <div className="flex justify-evenly items-center py-10">
      <Link href={"/"}>
        <Image src={logo} alt="logo" className="w-40 mx-8" />{" "}
      </Link>
      <ul className="flex gap-x-10 ">
        <li className="text-lg">
          <Link href={"/category/female"}>Female</Link>
        </li>
        <li className="text-lg">
          <Link href={"/category/male"}>Male</Link>
        </li>
        <li className="text-lg">
          <Link href={"/category/kids"}>Kids</Link>
        </li>
        <li className="text-lg">
          <Link href={"/products"}>All Products</Link>
        </li>
        <li className="flex border border-gray-300 gap-x-4">
          <Search className=" border border-slate-100" />
          <input
            type="text"
            placeholder="What you are looking for"
            className="rounded-r pr-32 text-sm font-normal"
          ></input>
        </li>
      </ul>

      <div className="h-10 w-10 rounded-full relative bg-gray-200 flex justify-center items-center">
        <span className="absolute right-1 top-0 rounded-full bg-green-600 h-4 w-4 text-white text-center">
          {cartValue}
        </span>
        <ShoppingCart className="h-6 w-6" />
      </div>
    </div>
  );
};

export default Header;
