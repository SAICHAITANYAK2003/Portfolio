import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Home />
    </>
  );
};

export default App;
