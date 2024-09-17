import { useEffect, useState } from "react";
import { fetchCall } from "../utils/apiCalls";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { Link } from "react-router-dom";
import Products from "../components/Products";
import Footer from "../components/Footer";

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

    if (loading) return <Loading/>
    if (error) return <Error message={error} />
  return (
    <>
      <section className="relative bg-homepage-image bg-center bg-no-repeat bg-cover font-poppins">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-dark-blue"></div>
        <div className="container flex flex-col h-screen justify-center items-start text-white">
          <h1 className="mb-4 font-bold text-4xl lg:text-5xl ">
            FASHION FADES. STYLE IS ETERNAL.
          </h1>
          <p className="mb-4 text-xl text-orange-400 lg:text-2xl">
          Temporary trends may come and go,  <br/>
          But true personal style endures.
          </p>
          <Link to={"/fake-store/shop"}>
            <button className="px-5 py-2.5 font-medium bg-orange-400 rounded-lg transition hover:bg-orange-800">
              Shop Now!
            </button>
            </Link>
        </div>
      </section>
      <section className="w-full mt-10 mb-8 xl:w-[80%] xl:mx-auto">
        <h2 className="mb-8 font-bold text-3xl text-blue-500 text-center">
          FEATURED PRODUCTS
        </h2>
        <div className="h-full grid grid-cols-1 gap-5 mx-4 md:grid-cols-2 lg:grid-cols-4">
          {products && 
            products.map((product, index) => (
                <Products
                  id={product.id}
                  key={index}
                  name={product.title}
                  UrlImage={product.image}
                  price={product.price}
                  showAdd={false}
                  />
            ))}
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default HomePage;
