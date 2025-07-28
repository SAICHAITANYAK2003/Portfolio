import { infoList, toolsData } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Aboutme = () => {
  const { themeValue } = useAppContext();
  return (
    <>
      <div
        id="about"
        className="w-full flex flex-col items-center justify-center   text-center scroll-mt-20  py-10 px-[12%]"
      >
        <h1 className="text-5xl dark:text-white ">About me</h1>
        <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
          <div>
            <img
              src="https://res.cloudinary.com/saichaitanyacloudinary/image/upload/v1744732626/portfoliopic_uexofb.png"
              alt="image"
              className="w-full lg:w-[90%] rounded-3xl"
            />
          </div>

          <div className="flex-1 items-start text-start">
            <p className="max-w-lg text-start dark:text-gray-300 text-gray-500 mt-4">
              I'm a Entry level Full Stack Web Developer skilled in building
              responsive and scalable applications using the MERN stack. I
              specialize in clean code, performance, and modern UI/UX—ready to
              be immediately hired for impactful roles.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <li
                  key={index}
                  className="border-[0.5px] border-gray-400 rounded-xl  p-6 cursor-pointer hover:shadow-black  transition duration-500 mt-8 text-start font-secondary hover:bg-gray-50 dark:hover:bg-black dark:hover:shadow-gray-300 dark:border-[1.5px]"
                >
                  <img
                    src={`${themeValue === "dark" ? iconDark : icon}`}
                    alt={title}
                    className="w-7 mt-3"
                  />
                  <h3 className="my-4 font-semibold  text-lg text-gray-700 dark:text-white">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm dark:text-white">
                    {description}
                  </p>
                </li>
              ))}
            </ul>

            <h1 className="mt-7 text-gray-500 text-lg">Tools i use</h1>

            <ul className="flex items-center gap-3 mt-6">
              {toolsData.map((tool, index) => (
                <li
                  key={index}
                  className="border border-gray-400 p-2 sm:p-4 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-transform duration-400 cursor-pointer dark:border-[1.5px]  "
                >
                  <img src={tool} alt="tool" className="w-8" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
