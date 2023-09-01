import React from "react";
import {
  FaCopyright,
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-3 bg-black text-white flex justify-between items-center pl-10 pr-10">
      <div className="flex items-center gap-5">
        <FaCopyright />
        <h1>2023 Quanta : All Rights Reserved</h1>
      </div>
      <div className="flex gap-5">
        <FaFacebookF className="hover:cursor-pointer" />
        <FaTwitter className="hover:cursor-pointer" />
        <FaGoogle className="hover:cursor-pointer" />
        <FaLinkedinIn className="hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
