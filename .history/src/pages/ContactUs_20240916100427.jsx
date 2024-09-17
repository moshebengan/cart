import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col overflow-x-hidden">
        <div className="w-full h-[50%] relative">
          <div className="h-full bg-white flex flex-col">
            <h3 className="text-gray-500 text-6xl ml-10 mt-10 font-poppins">
              GET IN TOUCH
            </h3>
            <h4 className="text-gray-400 text-2xl ml-10 mt-4 font-poppins">
              Want to get in touch? <br />
              Just pick up the phone or send me a message
            </h4>
          </div>
          <img
            src="/contactus2.jpg"
            alt=""
            className="w-[50%] h-full absolute -right-40 top-0 rounded-full object-cover"
          />
        </div>
        <div className="relative w-full h-[40%] bg-white p-4">
          <div className="h-full  bg-transparent flex justify-evenly relative -top-10  ">
            <div className=" ml-10 w-1/4 h-full bg-red-500  flex flex-col items-center justify-center rounded-xl drop-shadow-2xl">
              <div className="bg-yellow-300 h-[90%] w-full items-center justify-center flex  flex-col gap-4">
                <FaPhoneAlt size={"2em"} />
                <span>Reach me on my personal phone</span>
                <button className="px-5 py-2.5 font-medium bg-orange-400 rounded-lg transition hover:bg-orange-800 hover:text-white">
                  <a href={`tel:${+972525833787}`}>Call me</a>
                </button>
              </div>
            </div>
            <div className="mr-10 w-1/4 h-full bg-teal-500 flex flex-col items-center justify-center rounded-xl drop-shadow-2xl">
              <div className="bg-yellow-300 h-[90%] w-full items-center justify-center flex  flex-col gap-4">
                <FaWhatsapp size={"2em"} />
                <span>Send me a message on WhatsApp!</span>
                <button className="px-5 py-2.5 font-medium bg-orange-400 rounded-lg transition hover:bg-orange-800 hover:text-white">
                  <a
                    href={`https://wa.me/${+972525833787}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </button>
              </div>
            </div>
            <div className=" w-1/4 h-full bg-orange-500  flex items-center justify-center rounded-xl drop-shadow-2xl">
              <div className="bg-yellow-300 h-[90%] w-full items-center flex justify-center  flex-col gap-4">
                <MdEmail size={"2em"} />
                <span>Send me an email!</span>
                <button className="px-5 py-2.5 font-medium bg-orange-400 rounded-lg transition hover:bg-orange-800 hover:text-white">
                  <a href={`mailto:moshebengan@gmail.com`}>Email Me</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
