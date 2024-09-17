import { useState } from "react"


const NavigationBar = () => {

    const [cartItems, setCartItems] = useState(0);


  return (
    <div className="w-full bg-dark-blue font-poppins">
      Navigation
    </div>
  )
}

export default NavigationBar
