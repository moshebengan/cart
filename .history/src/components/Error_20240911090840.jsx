const Error = ({message}) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
        <h2 className="font-medium text-lg text-red-500">
            OH SNAP! SOMETHING WENT WRONG
        </h2>
        <p>{message}</p>
      
    </div>
  )
}

export default Error
