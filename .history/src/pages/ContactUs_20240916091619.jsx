import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col overflow-x-hidden">
        <div className="w-full h-[50%] relative">
          <div className="h-full bg-pink-500 flex flex-col">
            <h3 className="text-white text-6xl ml-10 mt-10 font-poppins">
              GET IN TOUCH
            </h3>
            <h4 className="text-gray-400 text-2xl ml-10 mt-4 font-poppins">
              Want to get in touch? <br />
              Want to offer me a position in your company?
              <br />
              Just pick up the phone or send me a message
            </h4>
          </div>
          <img
            src="/public/contactus2.jpg"
            alt=""
            className="w-[50%] h-full absolute -right-40 top-0 rounded-full object-cover"
          />
        </div>
        <div className="relative w-full h-[70%] bg-gray-300 p-4">
        <div className="h-full  bg-yellow-200 flex justify-evenly relative -top-10  ">
          <div className=" ml-10 w-1/4 h-full bg-red-500  flex items-center justify-center rounded-xl ">
            up
          </div>
          <div className="mr-10 w-1/4 h-full bg-teal-500  flex items-center justify-center rounded-xl ">
            down
          </div>
          <div className="mr-10 w-1/4 h-full bg-orange-500  flex items-center justify-center rounded-xl ">
            down
          </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
