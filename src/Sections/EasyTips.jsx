
import img1 from "../assets/tips.jpg"
import { FaBook, FaMapLocationDot, FaPlane } from "react-icons/fa6";

const EasyTips = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row items-center gap-12">

                {/* Left Side - Steps */}
                <div className="flex flex-col gap-8 flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold">Start Your Trip in 3 Easy Steps</h2>

                    {/* Step 1 */}
                    <div className="flex items-start gap-4">
                        <div className="bg-yellow-400 p-4 rounded-md">
                            <FaMapLocationDot className="text-white" />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">Choose</h4>
                            <p className="text-sm text-gray-600">Browse and pick your dream destination easily.</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start gap-4">
                        <div className="bg-red-400 p-4 rounded-md">
                            <FaBook className="text-white" />

                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">Book</h4>
                            <p className="text-sm text-gray-600">Secure your booking with just a few clicks.</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start gap-4">
                        <div className="bg-blue-600 p-4 rounded-md">
                            <FaPlane className="text-white" />

                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">Enjoy</h4>
                            <p className="text-sm text-gray-600">Relax and enjoy an unforgettable experience.</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <img
                        src={img1}
                        alt="img1"
                        className="rounded-full w-80 md:w-96 lg:w-[350px]"
                    />
                </div>

            </div>
        </section>

    );
};

export default EasyTips;