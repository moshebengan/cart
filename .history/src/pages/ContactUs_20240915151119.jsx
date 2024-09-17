

const ContactUs = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full h-[40%] bg-red-300">top</div>
      <div className="w-full h-[60%] bg-blue-400 relative flex flex-row">
        <div className="absolute top--10 left-10 bg-yellow-300">left</div>
        <div className="absolute top--10 right-10 bg-pink-400">right</div>
      </div>
    </div>
  )
}

export default ContactUs
