import Error from "./components/Error";
import HomePage from "./pages/HomePage";
import MyCart from "./pages/MyCart";
import NavigationBar from "./pages/NavigationBar";
import ShopPage from "./pages/ShopPage";


const routes = [
	{
		path: '/fake-store',
		element: <NavigationBar />,
		children: [
			{
				path:"home",
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
			}
		]
				
	},
	
];

export default routes