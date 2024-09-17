

const ContactUs = () => {
  return (
    <div className="w-full h-screen flex flex-col relative">
      <div className="w-full flex-1 bg-red-300">top</div>
      <div className="w-full flex-1 bg-blue-400  flex flex-row justify-evenly items-center gap-10">
        <div className="ml-10 flex-1 h-full bg-red-500" >up</div>
        <div className=" mr-10flex-1 h-full bg-teal-500">down</div>
        {/* <div className="absolute -top-10 left-10 bg-yellow-300 flex-initial w-64">left</div>
        <div className="absolute -top-10 right-10 bg-pink-400 flex-initial w-32 ">right</div> */}
      </div>
      <div className="bg-white flex-1"></div>
    </div>
  )
}

export default ContactUs
