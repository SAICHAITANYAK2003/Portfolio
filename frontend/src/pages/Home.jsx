import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Aboutme from "../components/Aboutme";
import Services from "../components/Services";
import Work from "../components/Work";
import Contact from "../components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "../components/footer";
import { useAppContext } from "../context/AppContext";

const Home = () => {
  const { themeValue} = useAppContext();

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className={` ${themeValue === "dark" ? "dark" : ""} dark:bg-black`}>
        <Navbar />
        <Header />
        <Aboutme />
        <Services />
        <Work />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
