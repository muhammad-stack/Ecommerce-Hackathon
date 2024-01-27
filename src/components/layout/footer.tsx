"use client";
import logo from "@/../../public/logo.webp";
import { Facebook, Linkedin, Twitter } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import Bottom from "./bottom";
export default function Footer() {
  return (
    <div>
      <section className="mt-52 mb-36 flex items-center ">
        {/* Left Side */}
        <div className="mx-32">
          <Image src={logo} alt="logo" className="w-40" />
          <h2 className="py-8 text-lg font-normal text-gray-500">
            Small, artisan label that offers a thoughtfully <br /> curated
            collection of high quality everyday <br /> essentials made.
          </h2>

          <Link
            href={""}
            className="flex  gap-x-4 "
            onClick={(e) => e.preventDefault()}
          >
            <Twitter size={22}  strokeWidth={0}  fill="black" color="#f1f1f1"  />

            <Facebook size={22} strokeWidth={0} fill="black"  color="#f1f1f1" />

            <Linkedin size={22}  strokeWidth={0}fill="black" color="#f1f1f1"  />
          </Link>
        </div>
        {/* Right Side */}
        <div className="w-[240] flex gap-x-52">
          <ul>
            <h1 className="font-bold text-xl text-gray-600">Company</h1>
            <Link href={"#"} onClick={(e) => e.preventDefault()}>
              <li className="text-lg font-normal text-gray-500 pt-2">About</li>
              <li className="text-lg font-normal text-gray-500 pt-2">
                Terms of Use
              </li>
              <li className="text-lg font-normal text-gray-500 pt-2">
                Privacy Policy
              </li>
              <li className="text-lg font-normal text-gray-500 pt-2">
                How it works
              </li>
              <li className="text-lg font-normal text-gray-500 pt-2">
                Contacts Us
              </li>
            </Link>
          </ul>
          <ul>
            <h1 className="font-bold text-xl text-gray-600">Support</h1>
            <Link href={"#"} onClick={(e) => e.preventDefault()}>
              <li className="text-lg font-normal text-gray-500 pt-2">
                Support Carrer
              </li>
              <li className="text-lg font-normal text-gray-500 pt-2">
                24h Service
              </li>
              <li className="text-lg font-normal text-gray-500 pt-2">
                Quick Chat
              </li>
            </Link>
          </ul>
          <ul>
            <h1 className="font-bold text-xl text-gray-600">Contact</h1>
            <Link href={"#"} onClick={(e) => e.preventDefault()}>
              <li className="text-lg font-normal text-gray-500 pt-2">
                Whatsapp
              </li>
              <li className="text-lg font-normal text-gray-500 pt-2">
                Support 24h
              </li>
            </Link>
          </ul>
        </div>
      </section>

      <Bottom />
    </div>
  );
}
