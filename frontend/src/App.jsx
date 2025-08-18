import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Projects from "./components/Projects";
import { useAppContext } from "./context/AppContext";

const App = () => {
  const { themeValue } = useAppContext();
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className={` ${themeValue === "dark" ? "dark" : ""} dark:bg-black`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
