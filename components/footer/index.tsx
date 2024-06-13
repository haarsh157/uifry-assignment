"use client";

import Image from "next/image";
import Logo from "@/utils/logo.svg";
import Mail from "@/utils/Mail.svg";
import Phone from "@/utils/Phone.svg";

const Footer = () => {
  return (
    <footer className="mt-10 md:mt-20 bg-gray-100 dark:bg-zinc-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-6 lg:px-32 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Contact */}
          <div className="flex flex-col gap-4">
            <Image src={Logo} alt="Logo" width={117} height={35} />
            <div className="flex items-center gap-2">
              <Image src={Mail} alt="Mail" width={20} height={18} />
              <span className="font-medium">Help@Frybix.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Phone} alt="Phone" width={20} height={18} />
              <span className="font-medium">+1 234 456 678 89</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-lg mb-2 font-bold">Links</h2>
            <p className="cursor-pointer hover:text-primary-red font-medium hover:text-red-500 transition ease duration-300">
              Home
            </p>
            <p className="cursor-pointer hover:text-primary-red font-medium hover:text-red-500 transition ease duration-300">
              About Us
            </p>
            <p className="cursor-pointer hover:text-primary-red font-medium hover:text-red-500 transition ease duration-300">
              Bookings
            </p>
            <p className="cursor-pointer hover:text-primary-red font-medium hover:text-red-500 transition ease duration-300">
              Blog
            </p>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-lg font-bold mb-2">Legal</h2>
            <p className="cursor-pointer hover:text-primary-red font-medium hover:text-red-500 transition ease duration-300">
              Terms of Use
            </p>
            <p className="cursor-pointer hover:text-primary-red font-medium hover:text-red-500 transition ease duration-300">
              Privacy Policy
            </p>
            <p className="cursor-pointer hover:text-primary-red font-medium hover:text-red-500 transition ease duration-300">
              Cookie Policy
            </p>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-lg font-bold mb-2">Product</h2>
            <p className="cursor-pointer hover:text-primary-red font-medium hover:text-red-500 transition ease duration-300">
              Take Tour
            </p>
            <p className="cursor-pointer hover:text-primary-red font-medium hover:text-red-500 transition ease duration-300">
              Live Chat
            </p>
            <p className="cursor-pointer hover:text-primary-red font-medium hover:text-red-500 transition ease duration-300">
              Reviews
            </p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-10 md:flex md:justify-between items-center">
          <div className="flex flex-col gap-4 md:w-1/3 justify-center items-center">
            <h2 className="text-lg font-bold">Newsletter</h2>
            <p className="cursor-pointer hover:text-primary-red font-medium hover:text-red-500 transition ease duration-300">
              Stay Up To Date
            </p>
          </div>
          <form className="flex gap-3 md:w-2/3">
            <input
              className="w-2/3 md:w-full px-4 py-2 rounded-lg outline-none dark:text-gray-900"
              type="text"
              placeholder="Your email"
            />
            <button className="w-1/3 md:w-auto bg-black text-white py-2 px-4 rounded-lg hover:bg-primary-red transition duration-300">
              Subscribe
            </button>
          </form>
        </div>

        {/* Divider and Copyright */}
        <hr className="my-10 border-gray-300" />
        <p className="text-center text-sm dark:text-gray-300">
          Copyright 2022 uifry.com all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
