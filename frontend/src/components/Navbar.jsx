import { assets } from "../assets/assets";
import {
  IoMoonOutline,
  IoSunnyOutline,
  IoLogoWhatsapp,
  IoMailOpenOutline,
} from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaAngleRight } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useAppContext } from "../context/AppContext";
const Navbar = () => {
  const { themeValue, onHandleTheme, whatsAppUrl } = useAppContext();
  const [isScroll, setIsScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const showMenuOptions = useRef();

  const openMenu = () => {
    showMenuOptions.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    showMenuOptions.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
        setShowMenu(false);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      {/* Desktop View */}

      <div className="fixed top-0 right-0 -z-10 w-11/12 translate-y-[-80%]  ">
        <img
          src={assets.header_bg_color}
          alt="header_bg_color"
          className="w-full "
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4  flex items-center justify-between  z-50 ${
          isScroll
            ? "bg-white/10 dark:bg-white/5 backdrop-blur-lg shadow-sm"
            : ""
        }`}
      >
        <a href="#" className="cursor-pointer dark:text-white">
          Sai Chaitanya.dev
        </a>

        <ul
          className={`hidden md:flex items-center gap-4 lg:gap-7   px-12 py-3 rounded-full border border-gray-100 shadow-sm bg-opacity-50 ${
            isScroll
              ? " bg-white/80 dark:bg-black"
              : " bg-white/45 dark:bg-black"
          } dark:text-white `}
        >
          <li>
            <a href="#" className="focus:font-extrabold">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="focus:font-extrabold ">
              About Me
            </a>
          </li>
          <li>
            <a href="#services" className="focus:font-extrabold">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="focus:font-extrabold">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="focus:font-extrabold">
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2.5 ">
          {/* Theme Button */}
          <button
            onClick={() => onHandleTheme((prev) => !prev)}
            className="cursor-pointer dark:text-white mr-4"
          >
            {themeValue === "dark" ? (
              <IoSunnyOutline size={25} />
            ) : (
              <IoMoonOutline size={25} />
            )}
          </button>

          <div className="relative z-50 hidden md:block">
            <div className="relative group">
              <button
                onClick={() => setShowMenu((prev) => !prev)}
                className="flex items-center space-x-3.5 border  px-3 py-2 rounded-full cursor-pointer hover:scale-105 group transition-all duration-500 dark:border-white dark:text-white"
              >
                <span className="hidden lg:block">Contact</span>
                <span
                  className={`transition-all duration-500 ${
                    showMenu ? "rotate-90" : ""
                  }`}
                >
                  <FaAngleRight />
                </span>
              </button>

              {/* Email and What's app */}
              {showMenu && (
                <>
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute bg-white  border border-gray-300 rounded-xl px-4 py-3 top-full  -right-2 shadow-lg shadow-gray-200  dark:border-white dark:text-white dark:shadow-none dark:bg-black w-48 mt-2 z-50"
                  >
                    <a
                      href="#contact"
                      className="flex items-center space-x-3 hover:bg-gray-100/70 px-3 py-2 rounded-lg  dark:hover:bg-transparent hover:text-blue-500  "
                    >
                      <span>Email</span>
                      <span>
                        <IoMailOpenOutline size={20} />
                      </span>
                    </a>

                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      className="flex items-center space-x-3 hover:bg-gray-100/70 px-3 py-2 rounded-lg  hover:text-green-500 dark:hover:bg-transparent "
                    >
                      <span>Whats app</span>
                      <span>
                        <IoLogoWhatsapp size={20} />
                      </span>
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Mobile View */}

          <div className="block md:hidden ml-4 dark:text-white ">
            <button onClick={openMenu} className="cursor-pointer">
              <HiMenuAlt3 size={25} />
            </button>
          </div>
        </div>

        {/* Mobile View */}

        <ul
          ref={showMenuOptions}
          className="flex md:hidden flex-col gap-4 fixed -right-64 top-0 bottom-0 py-20 px-16 h-screen w-[70%] max-w-[250px] bg-white  shadow-md border-l border-l-gray-200 z-50 transition duration-500"
        >
          <div className="absolute right-4 top-5 ">
            <button
              onClick={closeMenu}
              className="cursor-pointer transition hover:rotate-180 duration-700"
            >
              {" "}
              <IoIosCloseCircleOutline size={30} />
            </button>
          </div>
          <li>
            <a
              onClick={closeMenu}
              href="#"
              className=" border-b-2 border-transparent hover:border-black transition-all duration-600"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              href="#about"
              className=" border-b-2 border-transparent hover:border-black transition-all duration-600"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              href="#services"
              className=" border-b-2 border-transparent hover:border-black transition-all duration-600"
            >
              Services
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              href="#work"
              className=" border-b-2 border-transparent hover:border-black transition-all duration-600"
            >
              My Work
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              href="#contact"
              className=" border-b-2 border-transparent hover:border-black transition-all duration-600 "
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
