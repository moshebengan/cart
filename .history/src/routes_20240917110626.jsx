import { element } from "prop-types";
import Error from "./components/Error";
import ContactUs from "./pages/ContactUs";
import HomePage from "./pages/HomePage";
import MyCart from "./pages/MyCart";
import NavigationBar from "./pages/NavigationBar";
import ShopPage from "./pages/ShopPage";
import { Navigate } from "react-router-dom";


const routes = [
	{
		path: '/',
		element: <NavigationBar />,
		children: [
			{
				path:'/',
				element: <Navigate to="/home" replace/>
			},
			{
				path:"/home",
				element:<HomePage/>,
				errorElement: <Error/>
			},
			{ 	path: 'shop',
				 	element: <ShopPage />,
					errorElement: <Error/>

			},
			{
				path: 'cart',
				element: <MyCart />,
				errorElement: <Error/>
			},
			{
				path:'contact-us',
				element: <ContactUs/>,
				errorElement: <Error />
			}
		]
				
	},
	
];

export default routes