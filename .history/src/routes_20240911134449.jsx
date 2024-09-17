import Error from "./components/Error";
import HomePage from "./pages/HomePage";
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

			}
		]
				
				
		
		
	},
	// {
	// 	path: 'about',
	// 	element: <AboutPage />,
		
	// },
	// {
	// 	path: 'contact',
	// 	element: <ContactPage />,
		
	// },
	// {
	// 	path: 'shop',
	// 	element: <ShopPage />,
	// 	loader: loader,
	// },
	// {
	// 	path: 'category/men',
	// 	element: <MensPage />,
		
	// },
	// {
	// 	path: 'category/women',
	// 	element: <WomensPage />,
	// 	loader: loader,
	// },
	// {
	// 	path: 'category/kids',
	// 	element: <KidsPage />,
		
	// },
	// {
	// 	path: 'product/:id',
	// 	element: <Product />,
		
	// },
	// {
	// 	path: 'cart',
	// 	element: <Cart />,
		
	// },
];

export default routes