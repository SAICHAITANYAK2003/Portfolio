import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { motion } from "motion/react";

const resumeLink =
  "https://drive.google.com/file/d/1p6ohFud6ekIF4_DwbPuwEJ9nsA-En0so/view?usp=sharing";

const Header = () => {
  return (
    <div className="w-11/12 max-w-2xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-3 md:gap-6  ">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
 
      >
        <img
          src="https://res.cloudinary.com/saichaitanyacloudinary/image/upload/v1744732626/portfoliopic_uexofb.png"
          alt="profile image"
          className="w-30 aspect-square rounded-full hover:ring-2 ring-violet-300 p-0.5"
        />
      </motion.div>
      <h3 className="text-xl md:text-2xl mb-5 dark:text-white">
        Hi I’m Sai Chaitanya koduri <span className="">👋</span>
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-6xl mb-6 leading-16 dark:text-white">
        Full Stack Web Developer.
      </h1>
      <p className="  max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
        I'm a Full Stack Web Developer with experience in building websites
        using the MERN stack. I'm ready to be hired and help build clean, fast,
        and user-friendly web apps.
      </p>
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <a
          href="#contact"
          className="flex items-center gap-2 py-3 px-6 border rounded-full bg-black text-white group hover:scale-105 transition-all duration-700 dark:hover:bg-white dark:hover:text-black"
        >
          Contact me
          <FaAngleRight className="group-hover:translate-x-1 transition duration-400" />
        </a>

        <a
          download
          href={resumeLink}
          target="_blank"
          className="flex items-center gap-2 py-3 px-6 border rounded-full bg-transparent  group hover:scale-105 transition-all duration-700 dark:text-white dark:hover:bg-white dark:hover:text-black"
        >
          My Resume
          <BsDownload className="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
