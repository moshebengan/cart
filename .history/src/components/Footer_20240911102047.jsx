import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-dark-blue mt-10 pb-5">
      <div className="mx-auto max-w-md text-center p-5">
        <h1 className="font-bold text-4xl text-white mt-5 mb-3">
          KEEP YOURSELF UPDATED
        </h1>
        <form className="mt-6">
          <div className="relative max-w-lg">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="john@sample.com"
              className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium focus:outline-none"
            />
            <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-orange-500 px-5 py-3 text-sm font-medium text-white hover:bg-orange-900">
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <div className="container grid grid-cols-1 text-white my-10 md:grid-cols-2">
        <div className="w-full flex flex-col px-10 md:text-left  bg-red-700">
          <h1 className="font-bold text-2xl mb-2">MosesBG-SHOP</h1>
          <p className="mb-4 text-base text-gray-100">
            Pick the best way to record everything! <br />
            with the best store you trust.
          </p>
        </div>
        <div className="w-full flex justify-center items-center gap-6 flex-wrap md:gap-3 bg-yellow-200">
          <Link>About</Link>
          <Link>Blog</Link>
          <Link>Contact Us</Link>
          <Link>Terms & Conditions</Link>
        </div>
      </div>
      <p className="mt-10 mb-4 text-sm text-gray-400 text-center">
        Copyright © 2024. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
