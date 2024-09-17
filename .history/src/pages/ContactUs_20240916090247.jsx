import Footer from "../components/Footer"


const ContactUs = () => {
  return (
    <>
    <div className="w-full h-screen flex flex-col overflow-x-hidden">
    <div className="bg-dark-blue w-full h-[50%] relative">
        <div className="h-full bg-pink-500 flex flex-col">
            <h3 className="text-white text-6xl ml-10 mt-10 font-poppins">GET IN TOUCH</h3>
            <h4 className="text-gray-400 text-2xl ml-10 mt-10 font-poppins">Want to get in touch? <br/>Want to offer me a position in your company?<br/>Just pick up the phone or send me a message</h4>
        </div>
      <img src="/public/contactus2.jpg" alt="" className="w-[50%] h-full absolute -right-40 top-0 rounded-full object-cover"  />
      </div>
      <div className="w-full h-[50%] bg-yellow-200 flex flex-row relative ">
        <div className="absolute ml-10 w-1/4 h-full bg-red-500 left-0  -top-10 flex items-center justify-center rounded-xl md:relative" >up</div>
        <div className="absolute mr-10 w-1/4 h-full bg-teal-500 right-0 -top-10 flex items-center justify-center rounded-xl md:relative">down</div>
        <div className="absolute mr-10 w-1/4 h-full bg-orange-500 right-0 -top-10 flex items-center justify-center rounded-xl md:relative">down</div>
        {/* <div className="absolute -top-10 left-10 bg-yellow-300 flex-initial w-64">left</div>
        <div className="absolute -top-10 right-10 bg-pink-400 flex-initial w-32 ">right</div> */}
      </div>
      {/* <div className="bg-white w-full h-[10%]"></div> */}
      
    </div>
    
    <Footer/>
    
    </>
  )
}

export default ContactUs
