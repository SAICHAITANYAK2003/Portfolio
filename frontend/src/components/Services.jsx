import React from "react";
import { serviceData } from "../assets/assets";
import { FaAngleRight } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <div
        id="services"
        className="py-10 px-[12%] flex flex-col items-center justify-center  scroll-mt-20 "
      >
        <h1 className="text-5xl text-center dark:text-white">My services</h1>

        <p className="text-center text-gray-500 dark:text-gray-300 mt-10">
          I'm a Full Stack Web Developer with experience in building websites
          using the MERN stack. I'm ready to be hired and help build clean,
          fast, and user-friendly web apps.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-6 mt-15">
          {serviceData.map(({ icon, title, description, link }, index) => (
            <li
              key={index}
              className=" border p-5 font-secondary border-gray-300 rounded-md max-sm:hover:scale-105 md:hover:-translate-y-4 transition-all duration-700 hover:shadow-black dark:hover:shadow-white dark:text-white"
            >
              <img src={icon} alt={title} className="w-12" />
              <h2 className="mt-6 text-2xl">{title}</h2>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{description}</p>
              <a
                href={link}
                className="flex items-center gap-2 mt-4 text-sm text-gray-600 hover:underline group dark:text-gray-300"
              >
                Read more{" "}
                <FaAngleRight className="group-hover:translate-x-2 transition-all duration-500" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Services;
