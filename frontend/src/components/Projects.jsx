import { assets } from "../assets/assets";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoJavascript,
} from "react-icons/io5";
import { FaCubesStacked } from "react-icons/fa6";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { BsCodeSlash } from "react-icons/bs";
import { FaHandPointLeft } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Projects = () => {
  const navigate = useNavigate();
  const { projectsData } = useAppContext();

  const [selectLang, setSelectLang] = useState("fullstack");

  const filteredProjects = projectsData[selectLang] || [];

  return (
    <>
      <div className="h-screen px-5  md:px-20 py-7">
        <div className="fixed top-0 right-0 -z-10 w-11/12 translate-y-[-80%]  ">
          <img
            src={assets.header_bg_color}
            alt="header_bg_color"
            className="w-full "
          />
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate("/")}>
            <FaHandPointLeft
              size={30}
              className="hover:-translate-x-2 transition-all duration-500 cursor-pointer"
            />
          </button>

          <h1 className="text-2xl">Projects</h1>
        </div>

        <ul className="flex flex-wrap justify-center items-center mt-10 font-secondary gap-6">
          <li
            onClick={() => setSelectLang("fullstack")}
            className={`flex items-center space-x-3 text-[15px] border-[1.5px] border-gray-300 px-3 rounded-full py-1 cursor-pointer ${
              selectLang === "fullstack"
                ? "bg-black text-white border-none"
                : null
            }`}
          >
            <p>Full Stack</p>
            <span className="text-green-500">
              <FaCubesStacked size={20} />
            </span>
          </li>
          <li
            onClick={() => setSelectLang("react")}
            className={`flex items-center space-x-3 text-[15px] border-[1.5px] border-gray-300 px-3 rounded-full py-1 cursor-pointer ${
              selectLang === "react" ? "bg-black text-white border-none" : ""
            } `}
          >
            <p>React Js</p>
            <span className="text-sky-500">
              <IoLogoReact size={20} />
            </span>
          </li>

          <li
            onClick={() => setSelectLang("javascript")}
            className={`flex items-center space-x-3 text-[15px] border-[1.5px] border-gray-300 px-3 rounded-full py-1 cursor-pointer ${
              selectLang === "javascript"
                ? "bg-black text-white border-none"
                : ""
            }  `}
          >
            <p>Javascript</p>
            <span className="text-yellow-500">
              <IoLogoJavascript size={20} />
            </span>
          </li>

          <li
            onClick={() => setSelectLang("htmlcss")}
            className={`flex items-center space-x-3 text-[15px] border-[1.5px] border-gray-300 px-3 rounded-full py-1 cursor-pointer ${
              selectLang === "htmlcss" ? "bg-black text-white border-none" : ""
            } `}
          >
            <span className="text-orange-700">
              <IoLogoHtml5 size={20} />
            </span>
            <p>HTML & CSS</p>
            <span className="text-blue-700">
              <IoLogoCss3 size={20} />
            </span>
          </li>
        </ul>

        {/* Projects Data */}

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-20 justify-items-center w-full">
            {filteredProjects.map((project, index) => (
              <div
                style={{ backgroundImage: `url(${project.image})` }}
                key={index}
                className="w-[70%] md:w-[80%] aspect-square font-secondary  border border-gray-200 rounded-2xl  hover:scale-105 transition-all duration-500 bg-no-repeat bg-center bg-cover p-4 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-b  from-transparent to-black/60 group-hover:backdrop-blur-xs  rounded-2xl"></div>
                <div className="bg-white absolute bottom-5 px-3 py-4 w-[90%] rounded-md flex items-center  justify-between z-50">
                  <h2 className="text-lg">{project.name}</h2>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      className="flex items-center mt-2  space-x-3 bg-blue-100 text-blue-700 hover:bg-blue-800 hover:text-white p-3 rounded-full "
                    >
                      <span>
                        <LuSquareArrowOutUpRight size={20} />{" "}
                      </span>
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      className="flex items-center mt-2  space-x-3 bg-green-100 text-green-700 hover:bg-green-800 hover:text-white p-3 rounded-full"
                    >
                      <span>
                        <BsCodeSlash size={20} />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-[80%]  mt-4">
            <p>Projects will be added soon..</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
