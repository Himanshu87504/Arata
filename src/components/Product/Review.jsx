import React from "react";
import { FaStar } from "react-icons/fa";
import reviewData from "./Review.json";

const Review = () => {
    return (
        <div className="w-full bg-[#E9EAF4] py-10 px-0 ">


            <div
                className="flex  hide-scrollbar overflow-x-scroll snap-x snap-mandatory"
                style={{ scrollBehavior: "smooth" }}
            >

                {reviewData.map((item, index) => (
                    <div
                        key={index}
                        className="w-full flex-shrink-0 snap-center px-6"
                    >
                        <div className="w-full bg-[#F0F5FF] rounded-xl shadow p-10 flex flex-col items-center">


                            <div className="flex gap-1 mb-3">
                                {Array(item.stars).fill().map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400 text-2xl" />
                                ))}
                            </div>


                            <p className="text-gray-600 text-center text-lg">
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
            <div>
                <h1></h1>
            </div>
        </div>
    );
};

export default Review;
