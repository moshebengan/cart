import { useState } from "react"


const ShopPage = () => {

    const [search, setSearch] = useState('')

    const handleSearchInput = (e) => {
        setSearch(e.target.value)
    };

  return (
    <>
    <div className="container flex justify-end items-center text-dark-blue font-poppins bg-red-300 pt-3 gap-5">
        <div className="w-auto relative text-gray-600">
            <input type="search" name="search" placeholder="Search" value={search} onChange={handleSearchInput} className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" />
            <button className="absolute right-0 top-0 bg-orange-500 py-2 px-3 rounded-r-full hover:bg-orange-900">search</button>
        </div>
      
    </div>
    </>
  )
}

export default ShopPage
