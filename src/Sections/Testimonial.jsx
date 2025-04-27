import React from 'react';
import { FaStar } from 'react-icons/fa6';
import profile from '../assets/my photo.jpeg'

const Testimonial = () => {
    return (

        <section className="py-12 px-4 md:px-20 bg-white">
            {/* Title */}
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold">
                    Here What <span className="text-yellow-400">Our Customer</span> Say
                </h2>
            </div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-12 ">

                {/* Left Side */}
                <div className="flex-1 mt-10">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-full">
                        Read More
                    </button>
                </div>

                {/* Right Side */}
                <div className="flex-1 flex flex-col items-center md:items-start  mt-10">
                    <div className="relative border-l-4 border-yellow-400 bg-gray-100 rounded-lg shadow-lg p-6 pt-16 w-full max-w-md">
                        {/* User Image */}
                        <div className="absolute top-0 left-6 transform -translate-y-1/2">
                            <img
                                src={profile}
                                alt="Customer"
                                className="rounded-xl w-20 h-20 object-cover border-4 border-white shadow-md"
                            />
                        </div>

                        {/* Card Text */}
                        <p className="text-gray-700 mb-4">
                            text of the printing and typesetting industry. Lorem Ipsum has been scrambled to make a type
                        </p>
                        <div className='flex justify-between'>
                            {/* Name */}
                            <h4 className="font-semibold mb-2">Tawhidul Islam</h4>

                            {/* Stars */}
                            <div className="flex items-center flex-wrap">

                                <div  className="flex items-center">
                                    <FaStar className="w-4 h-4 text-yellow-400 fill-yellow-400"
                                    />
                                    <FaStar className="w-4 h-4 text-yellow-400 fill-yellow-400"
                                    />
                                    <FaStar className="w-4 h-4 text-yellow-400 fill-yellow-400"
                                    />
                                    <FaStar className="w-4 h-4 text-yellow-400 fill-yellow-400"
                                    />
                                    <FaStar className="w-4 h-4 text-yellow-400 fill-yellow-400"
                                    />
                                </div>
                                <p className="text-sm ml-2">5 Star</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
};

export default Testimonial;