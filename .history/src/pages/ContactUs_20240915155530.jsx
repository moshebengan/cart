

const ContactUs = () => {
  return (
    <div className="w-full h-screen flex flex-col">
    <div className="bg-dark-blue w-full h-[50%] relative">
      <img src="/public/contactus.jpg" alt="" className="w-[50%] absolute -right-20 top-5 rounded-full"  />
      </div>
      <div className="w-full h-[40%] bg-yellow-200 flex flex-row relative">
        <div className="absolute ml-10 w-5/12 h-full bg-red-500 left-0  -top-10 flex items-center justify-center rounded-xl" >up</div>
        <div className="absolute mr-10 w-5/12 h-full bg-teal-500 right-0 -top-10 flex items-center justify-center rounded-xl">down</div>
        {/* <div className="absolute -top-10 left-10 bg-yellow-300 flex-initial w-64">left</div>
        <div className="absolute -top-10 right-10 bg-pink-400 flex-initial w-32 ">right</div> */}
      </div>
      <div className="bg-white w-full h-[10%]"></div>
    </div>
  )
}

export default ContactUs
