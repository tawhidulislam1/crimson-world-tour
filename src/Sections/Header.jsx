import Navbar from "../Components/Navbar";
import cover from "../assets/cover.jpg";



const Header = () => {
    return (
        <div
            className="bg-cover bg-center"
            style={{
                backgroundImage: `url(${cover})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <div className="max-w-full lg:max-w-7xl mx-auto ">

                <div className=" hero min-h-screen place-items-baseline items-center ">
                    <div className="hero-content text-neutral-content ">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-4xl font-bold text-[#FFCD05]">Explore the unseen</h1>
                            <h1 className="mb-5 text-4xl font-bold">Discover the new way</h1>
                            <p className="mb-5">
                                Discover new destinations and unforgettable adventures with Safara Tours.
                            </p>
                            <button className="btn bg-[#FFCD05] text-white rounded-4xl  py-5 px-10 b-none">Explore  Our Site</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center p-5 bg-[#ffffff30] bg-opacity-10 rounded max-w-6xl mx-auto">
                    <div className="bg-white bg-opacity-70 w-full backdrop-blur-md rounded-xl p-4 flex flex-wrap gap-4 justify-center items-center shadow-lg">

                        {/* Dropdown 1 */}
                        <select className="select select-bordered border-none w-full sm:w-40 md:w-48">
                            <option disabled selected>Location</option>
                            <option>Dhaka</option>
                            <option>Chittagong</option>
                            <option>Khulna</option>
                        </select>

                        {/* Dropdown 2 */}
                        <select className="select select-bordered border-none w-full sm:w-40 md:w-48">
                            <option disabled selected>Select Date</option>
                            <option>Today</option>
                            <option>Tomorrow</option>
                            <option>Next Week</option>
                        </select>

                        {/* Dropdown 3 */}
                        <select className="select select-bordered border-none w-full sm:w-40 md:w-48">
                            <option disabled selected>Tour Type</option>
                            <option>Adventure</option>
                            <option>Relax</option>
                            <option>Business</option>
                        </select>

                        {/* Dropdown 4 */}
                        <select className="select select-bordered border-none w-full sm:w-40 md:w-48">
                            <option disabled selected>Lorem</option>
                            <option>Lorem 1</option>
                            <option>Lorem 2</option>
                        </select>

                        {/* Search Button */}
                        <button className="btn bg-yellow-400 text-black border-none w-full sm:w-40 md:w-32">
                            Search
                        </button>
                    </div>
                </div>

            </div>



        </div>
    );
}


export default Header;