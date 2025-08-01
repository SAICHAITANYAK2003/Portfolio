import React from "react";
import { projectsData } from "../assets/assets";
import { RiSendPlaneLine } from "react-icons/ri";
import { GoArrowRight } from "react-icons/go";

const Work = () => {
  return (
    <>
      <div id="work" className="py-10 px-[10%] w-full   scroll-mt-20">
        <h1 className="text-5xl text-center dark:text-white ">Work</h1>
        <p className="text-center mt-8 text-gray-500 dark:text-gray-300">
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in full-stack development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10  mt-10">
          {projectsData.map(({ title, description, bgImage }, index) => (
            <div
              key={index}
              className="p-4 font-secondary bg-center bg-no-repeat bg-cover rounded-lg w-[90%] md:w-full aspect-square relative hover:scale-105 transition-all duration-500"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <div className="bg-white w-[90%]  flex items-center  justify-between rounded-md py-3 px-4 absolute  bottom-4">
                <div className=" ">
                  <h2>{title}</h2>
                  <p className="text-gray-500">{description}</p>
                </div>

                <button className="p-3 rounded-full border cursor-pointer hover:bg-show hover:-translate-y-1 hover:translate-x-1 transition duration-300 hover:shadow-[-3px_2px_0px_black]">
                  {" "}
                  <RiSendPlaneLine />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full  flex items-center justify-center ">
          <a
            href="#"
            className="px-4 py-2.5 rounded-full border border-gray-500 font-secondary text-gray-500 mt-10 flex items-center justify-center gap-4 hover:scale-105 transition-all duration-500 group dark:border-2 dark:text-gray-300"
          >
            show more{" "}
            <GoArrowRight className="group-hover:translate-x-2 transition-all duration-500" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Work;
