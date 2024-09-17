import { useState } from "react"
import { Link } from "react-router-dom";


const NavigationBar = () => {

    const [cartItems, setCartItems] = useState(0);


  return (
    <div className="w-full font-poppins">
        <div className="container">
            <nav className="py-3 flex justify-between items-center text-white">
                <h1 className="font-bold text-2xl">MosesBG-STORE</h1>
                <div className="hidden md:flex gap-6">
                    <Link to={"/fake-store"}>Home</Link>
                    <Link>Shop</Link>
                    <Link>Contact us</Link>
                    <Link>Services</Link>

                </div>
            </nav>
        </div>
      Navigation
    </div>
  )
}

export default NavigationBar
