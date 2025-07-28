import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import toast from "react-hot-toast";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    number: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const onHandleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const onHanldeSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const formPayload = new FormData(e.target);
    formPayload.append("access_key", import.meta.env.VITE_FORM_ACCESS_KEY);
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("message", formData.description);
    formPayload.append("number", formData.number);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formPayload,
    });

    const fetchedData = await response.json();

    if (fetchedData.success) {
      setResult("Details Submitted Successfully ");
      setFormData({ name: "", email: "", description: "" });
      toast.success("Details Submitted Successfully ");
      setLoading(false);
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast.success(data.message);
      setLoading(false);
    }
  };
  return (
    <>
      <div
        id="contact"
        className="flex flex-col items-center   scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center h-screen space-y-6 pt-10 dark:bg-none dark:text-white"
      >
        <h3 className="text-lg text-center">Contact with me</h3>
        <h1 className="text-5xl text-center  ">Get in touch</h1>
        <p className="text-md text-gray-500 text-center ">
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </p>

        {!loading ? (
          <form
            onSubmit={onHanldeSubmit}
            className="font-secondary flex flex-col items-center   w-full  max-w-2xl mx-auto px-4"
          >
            <div className="grid grid-cols-1  md:grid-cols-2 gap-6 mt-7 w-full ">
              <input
                required
                autoComplete="true"
                value={formData.name}
                name="name"
                onChange={onHandleChange}
                type="text"
                placeholder="Enter your name"
                className="p-3 border border-gray-300 rounded-md outline-none pl-4 bg-white  w-full dark:text-white dark:bg-gray-900"
              />
              <input
                required
                autoComplete="true"
                value={formData.email}
                name="email"
                onChange={onHandleChange}
                type="email"
                placeholder="Enter your email"
                className="py-3 border border-gray-300 rounded-md outline-none pl-4 bg-white  w-full dark:text-white dark:bg-gray-900"
              />
            </div>

            <textarea
              value={formData.description}
              name="description"
              onChange={onHandleChange}
              rows={5}
              className="py-3 border border-gray-300 rounded-md outline-none pl-4 bg-white  w-full mt-8 dark:text-white dark:bg-gray-900"
              placeholder="Enter your message"
            ></textarea>

            {/* Customised Emails from the web3forms */}
            <input
              type="hidden"
              name="subject"
              value="✅  New Contact from Portfolio"
            ></input>
            <input type="hidden" name="from_name" value="Webinfloo Portfolio" />

            <button
              type="submit"
              className="flex items-center gap-2 py-3 px-6 border rounded-full bg-black text-white group hover:scale-105 transition-all duration-700 mt-8 dark:hover:bg-white dark:hover:text-black"
            >
              Submit Now
              <FaAngleRight className="group-hover:translate-x-1 transition duration-400" />
            </button>
          </form>
        ) : (
          <div class="text-center mt-20">
            <div
              style={{ animationDuration: "2s" }}
              className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-500  mx-auto"
            ></div>

            <p className="text-gray-500 dark:text-zinc-400 mt-5">
              Almost there
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
