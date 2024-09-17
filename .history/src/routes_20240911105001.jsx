import Error from "./components/Error";
import HomePage from "./pages/home/HomePage";
import NavigationBar from "./pages/home/NavigationBar";


const routes = [
	{
		path: '/fake-store',
		element: <NavigationBar />,
		children: [
			{
				path:"home",
				element:<HomePage/>,
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