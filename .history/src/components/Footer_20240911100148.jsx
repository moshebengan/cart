const Footer = () => {
  return (
    <footer className="w-full h-auto bg-dark-blue mt-10 mb-5">
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
    </footer>
  );
};

export default Footer;
