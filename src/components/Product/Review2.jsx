import React, { useState } from "react";
import { FaStar, FaUserCircle } from "react-icons/fa";
import reviews from "./Reviews2.json";

const Review2 = () => {
    const [visibleCount, setVisibleCount] = useState(5);

    const loadMore = () => {
        setVisibleCount((prev) => prev + 3);
    };

    return (
        <div className="w-full bg-[#EEF1FB] py-10 px-6 flex flex-col items-center">

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">

                {reviews.slice(0, visibleCount).map((item) => (
                    <div
                        key={item.id}
                        className="bg-white p-6 rounded-2xl shadow-md"
                    >
                        {/* Stars + Time */}
                        <div className="flex justify-between items-center">
                            <div className="flex text-yellow-400">
                                {Array(item.stars).fill().map((_, i) => (
                                    <FaStar key={i} className="text-lg" />
                                ))}
                            </div>

                            <p className="text-gray-500 text-sm">{item.time}</p>
                        </div>

                        {/* User + Name */}
                        <div className="flex items-center mt-3 gap-3">
                            <FaUserCircle className="text-blue-600" size={32} />
                            <h2 className="font-semibold text-blue-900">
                                {item.name}
                            </h2>
                        </div>

                        {/* Title */}
                        <h3 className="mt-3 font-medium text-gray-800">
                            {item.title}
                        </h3>

                        {/* Body */}
                        <p className="text-gray-600 mt-2 text-sm">
                            {item.text.slice(0, 120)}...
                            <span className="text-blue-700 cursor-pointer"> Read more</span>
                        </p>
                    </div>
                ))}

            </div>

            {/* LOAD MORE BUTTON */}
            {visibleCount < reviews.length && (
                <button
                    onClick={loadMore}
                    className="mt-8 px-6 py-3 bg-white border border-black rounded-full text-lg font-medium hover:bg-gray-100"
                >
                    Load More
                </button>
            )}
        </div>
    );
};

export default Review2;
