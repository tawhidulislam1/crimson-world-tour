import React from 'react';

const Card = ({ title, image, price }) => {
    return (
        <div className="flex flex-col items-start">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-md"
            />
            <div className="flex justify-between w-full mt-3 text-[14px] font-medium">
                <span>{title}</span>
                <span>{price}</span>
            </div>
            <p className="mt-2 text-[14px] text-gray-600 cursor-pointer hover:underline">&gt; View More</p>
        </div>
    );
};

export default Card;