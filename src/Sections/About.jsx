import { FaStar } from "react-icons/fa6";
import img from "../assets/img 1.png"


const About = () => {
    return (
        <div>
            <div className="mt-10 text-center max-w-xl mx-auto">
                <h2 className="text-3xl font-bold">Why <span className="text-[#FFCD05]">Crimson</span> Tours </h2>
                <p className="text-[14px] text-[#323232] py-1 px-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <section className="flex flex-col md:flex-row items-center justify-center p-6 gap-8">
                {/* Left: Image */}
                <div className="flex justify-center md:w-1/2">
                    <img
                        src={img} 
                        alt="Smiling person"
                        className="rounded-2xl shadow-lg"
                    />
                </div>

                {/* Right: Text and Stats */}
                <div className="flex flex-col md:w-1/2 items-center md:items-start text-center md:text-left space-y-6">
                    {/* Stats */}
                    <div className="flex gap-8">
                        <div>
                            <h2 className="text-2xl font-bold">480k+</h2>
                            <p className="text-gray-500">Total reach</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">2k+</h2>
                            <p className="text-gray-500">Total Visit</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-1">
                                <FaStar className="w-5 h-5 text-yellow-400" />
                                <h2 className="text-2xl font-bold">4.7</h2>
                            </div>
                            <p className="text-gray-500">Review</p>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="max-w-xl text-gray-600">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book...
                    </p>
                </div>
            </section>

        </div>
    );
};

export default About;