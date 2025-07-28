import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const linkedInUrl = "https://www.linkedin.com/in/saichaitanyakoduri";
const githubUrl = "https://github.com/SAICHAITANYAK2003";
const gmail = "k.saichaitanya222@gmail.com";

const Footer = () => {
  const { themeValue } = useAppContext();
  return (
    <>
      <div className="w-full  py-15  ">
        <h1 className="text-center text-2xl dark:text-white">Sai Chaitanya</h1>

        <div className="flex flex-row items-center justify-center mt-7 gap-4  ">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-800 cursor-pointer flex items-center   bg-white border border-gray-300 px-4 py-2 rounded-full hover:shadow-lg hover:shadow-gray-200 dark:hover:shadow-none"
          >
            <FaGithub size={40} />{" "}
            <span className="max-sm:hidden ml-3.5">Github</span>
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0077B5] cursor-pointer flex items-center   text-center bg-white border border-gray-300 px-4 py-2 rounded-full hover:shadow-lg hover:shadow-gray-200 dark:hover:shadow-none"
          >
            <FaLinkedin size={40} />
            <span className="max-sm:hidden ml-3.5">LinkedIn</span>
          </a>
        </div>

        <p
          href="mailto:k.saichaitanya222@gmail.com"
          className="mt-10 flex items-center justify-center gap-3.5 dark:text-white"
        >
          <img
            src={`${
              themeValue === "dark" ? assets.mail_icon_dark : assets.mail_icon
            }`}
            alt=""
            className="w-6"
          />
          {gmail}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between  border-t border-gray-400  mx-[3%] mt-20">
          <div>
            <p className="font-secondary text-gray-500 dark:text-gray-300 mt-4">
              © {new Date().getFullYear()} Sai Chaitanya. All rights reserved.
            </p>
          </div>

          <div className="font-secondary  space-x-8 text-gray-500 dark:text-gray-300 mt-4">
            <a href="#" className="hover:underline">
              Terms of Services
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Connect with me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
