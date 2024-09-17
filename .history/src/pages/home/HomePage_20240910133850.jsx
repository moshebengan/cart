import { useEffect, useState } from "react";
import { fetchCall } from "../../utils/apiCalls";
import Loading from "../../components/Loading";

const HomePage = () => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        try {
            const res = await fetchCall("/products?limit=4");
            setProducts(res)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    };

    console.log(products)

    if (loading) return <Loading/>
    // if (error) return 
  return (
    <div className="wrapper">
      <div className="w-full px-3 h-screen flex flex-col items-center bg-red-600">HELLO</div>
    </div>
  );
};

export default HomePage;
