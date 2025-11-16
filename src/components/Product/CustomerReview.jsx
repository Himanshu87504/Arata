import { FaStar } from "react-icons/fa";

const CustomerReviews = () => {
    const photos = [
        "https://judgeme.imgix.net/arata/1751282128__inbound8513585483820735615__original.jpg?auto=format",
        "https://judgeme.imgix.net/arata/1751282128__inbound8513585483820735615__original.jpg?auto=format",
        "https://judgeme.imgix.net/arata/1751282128__inbound8513585483820735615__original.jpg?auto=format",
        "https://judgeme.imgix.net/arata/1751282128__inbound8513585483820735615__original.jpg?auto=format",
        "https://judgeme.imgix.net/arata/1751282128__inbound8513585483820735615__original.jpg?auto=format",
        "https://judgeme.imgix.net/arata/1751282128__inbound8513585483820735615__original.jpg?auto=format",
    ];

    return (
        <div className="w-full flex justify-center bg-[#EEF1FB] pt-5 ">
            <div className="w-11/12 md:w-5/6 bg-white rounded-2xl shadow-md px-6 md:px-12 ">


                <h2 className="text-xl font-smibold text-center mb-6 p-3">
                    Customer Reviews
                </h2>


                <div className="flex flex-col md:flex-row md:items-center justify-center gap-4">


                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex gap-2 items-center">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400 text-xl" />
                                ))}
                            </div>
                            <p className="text-lg font-semibold mt-2">4.65 out of 5</p>
                        </div>
                        <p className="text-gray-600 text-sm">Based on 1365 Reviews</p>
                    </div>


                    <div className="flex justify-center md:justify-end">
                        <button className="px-8 md:px-10 py-3 bg-[#1857D3] rounded-full text-white text-lg font-semibold hover:bg-blue-700 transition-all">
                            Write a review
                        </button>
                    </div>
                </div>


                <div className="w-full h-px bg-gray-200 my-10"></div>


                <div>
                    <p className="text-gray-700 font-sm mb-3 flex justify-start pl-57">
                        Customer photos & videos
                    </p>

                    <div className="flex items-center gap-3 overflow-x-auto pb-2 justify-center">

                        {photos.slice(0, 6).map((img, index) => (
                            <div
                                key={index}
                                className="w-24 h-24 rounded-xl overflow-hidden border border-gray-200 flex-shrink-0"
                            >
                                <img
                                    src={img}
                                    alt="customer"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}

                        <button className="text-blue-700 font-medium text-sm underline ml-3 whitespace-nowrap">
                            See more
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CustomerReviews;
