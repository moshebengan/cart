

const ContactUs = () => {
  return (
    <div className="w-full h-screen flex flex-col relative">
      <div className="w-full h-[40%] bg-red-300">top</div>
      <div className="w-full h-[40%] bg-transparent flex flex-row justify-evenly items-center gap-10 relative">
        <div className="ml-10  bg-red-500 -top-10" >up</div>
        <div className=" mr-10  h-full bg-teal-500">down</div>
        {/* <div className="absolute -top-10 left-10 bg-yellow-300 flex-initial w-64">left</div>
        <div className="absolute -top-10 right-10 bg-pink-400 flex-initial w-32 ">right</div> */}
      </div>
      <div className="bg-white w-full h-[20%]"></div>
    </div>
  )
}

export default ContactUs
