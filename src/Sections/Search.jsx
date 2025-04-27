
import img1 from "../assets/Search_cover.png"
const Search = () => {
    return (
        <div id="contact" className="relative w-full h-[450px] bg-cover bg-center" style={{ backgroundImage: `url(${img1})` }}>

            {/* Search Box */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-full px-4">
                <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden max-w-[500px] mx-auto w-full">
                    <input
                        type="text"
                        placeholder="Search....."
                        className="flex-grow px-4 py-3 text-gray-700 focus:outline-none text-sm sm:text-base"
                    />
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 text-sm sm:text-base">
                        Search
                    </button>
                </div>
            </div>


        </div>
    )
};

export default Search;