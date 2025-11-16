import React, { useState } from "react";
import Review from "./Review";
import WaytoUse from "./WaytoUse";
import Review2 from "./Review2";
import CustomerReviews from "./CustomerReview";

const Product = () => {
    const media = [
        {
            type: "image",
            src: "https://www.arata.in/cdn/shop/files/hair-growth-serum-for-men-and-women-regrowth-in-90-days-free-derma-987.webp?v=1749897380&width=900",
        },
        {
            type: "image",
            src: "https://www.arata.in/cdn/shop/files/7_aa6be74a-c5b9-4e48-a9f9-b5a2782c9db5.jpg?v=1753097108&width=900",
        },
        {
            type: "image",
            src: "https://www.arata.in/cdn/shop/files/hair-growth-serum-for-men-and-women-regrowth-in-90-days-free-derma-987.webp?v=1749897380&width=900",
        },
        {
            type: "video",
            src: "https://www.arata.in/cdn/shop/files/quinn_h8lg400fs1q66q3g9711y8cw.mp4#t=0.1",
        },
    ];
    const FrequentlyBought = [
        {
            name: "Anti-Hairfall Shampoo Anti-Hairfall Shampoo Anti-Hairfall Shampoo",
            image:
                "https://www.arata.in/cdn/shop/files/Website_Primary_Antihairfall_Shampoo_500x.webp?v=1762247837",
            price: "₹499",
        },
        {
            name: "Hair Growth Serum - For Men and Women (1 Month Pack)",
            image:
                "https://www.arata.in/cdn/shop/files/hair-growth-serum-for-men-and-women-regrowth-in-90-days-free-derma-987_500x.webp?v=1749897380",
            price: "₹649",
        },
        {
            name: "Anti-Hairfall Conditioner Anti-Hairfall Shampoo Anti-Hairfall Shampoo",
            image:
                "https://www.arata.in/cdn/shop/files/Website_Primary_Anti_hair_fall_Conditioner_500x.webp?v=1760711046",
            price: "₹549",
        },
    ];

    const benifits = [
        {
            heading: "Helps reduce hair loss& thinning",
            image: "https://www.arata.in/cdn/shop/files/Layer_6.svg?v=1745318749&width=200"
        },
        {
            heading: "Promotes visible hair regrowth",
            image: "https://www.arata.in/cdn/shop/files/Layer_3.svg?v=1745319187&width=200"
        },
        {
            heading: "Helps reactivate hair follicles",
            image: "https://www.arata.in/cdn/shop/files/Layer_9.svg?v=1745319202&width=200"
        },
        {
            heading: "Supports increased blood circulation",
            image: "https://www.arata.in/cdn/shop/files/Layer_12.svg?v=1745319218&width=200"
        }
    ]

    const result = [
        "https://www.arata.in/cdn/shop/files/arata-intensive-hair-growth-serum-a-beforeafter-1.webp?v=1749896622&width=600",
        "https://www.arata.in/cdn/shop/files/arata-intensive-hair-growth-serum-a-beforeafter-2.webp?v=1749896628&width=600",
        "https://www.arata.in/cdn/shop/files/arata-intensive-hair-growth-serum-a-beforeafter-3.webp?v=1749896634&width=600"
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="bg-[#E9EAF4]">
            <div className="flex flex-col lg:flex-row gap-10 p-6 w-full mt-20  pl-10 lg:pl-40 pr-10 lg:pr-35">
                {/* LEFT MEDIA SECTION */}
                <div className="w-full lg:w-1/2 flex flex-col items-center">
                    <div className="relative w-full h-[700px] bg-gray-100 rounded-2xl overflow-hidden shadow-md">
                        {/* Image / Video */}
                        {media[currentIndex].type === "image" ? (
                            <img
                                src={media[currentIndex].src}
                                alt="Product"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <video
                                src={media[currentIndex].src}
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                            />
                        )}

                        {/* Arrow Buttons (fixed) */}
                        <button
                            onClick={() =>
                                setCurrentIndex((prev) => (prev - 1 + media.length) % media.length)
                            }
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-[#113F8A] text-2xl font-bold rounded-full p-3 shadow-md hover:bg-white transition"
                        >
                            ◀
                        </button>
                        <button
                            onClick={() => setCurrentIndex((prev) => (prev + 1) % media.length)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 text-[#113F8A] text-2xl font-bold rounded-full p-3 shadow-md hover:bg-white transition"
                        >
                            ▶
                        </button>
                    </div>

                    {/* Thumbnails */}
                    <div className="flex gap-3 mt-4 justify-center">
                        {media.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`border-2 rounded-lg overflow-hidden transition-all duration-300 
                ${currentIndex === index
                                        ? "border-black scale-110"
                                        : "border-transparent opacity-70 hover:opacity-100"
                                    }`}
                            >
                                {item.type === "image" ? (
                                    <img
                                        src={item.src}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-20 h-20 object-cover"
                                    />
                                ) : (
                                    <video
                                        src={item.src}
                                        muted
                                        className="w-20 h-20 object-cover"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>


                <div className="w-full lg:w-1/2 space-y-4 mr-10 lg:sticky lg:top-24 self-start">
                    {/* Title */}
                    <h1 className="text-lg font-semibold text-[#113F8A]">
                        Arata Hair Growth Serum for Men and Women | For Fuller, Denser,
                        Thicker Hair Growth | Free Derma Roller
                    </h1>
                    <p className="text-[#113F8A] text-sm -mt-3">
                        Boosts hair regrowth | Helps in follicle rejuvenation | Reduces hair
                        thinning
                    </p>

                    {/* Price */}
                    <div className="text-3xl font-bold text-[#000072]">₹649</div>
                    <p className="text-gray-500 text-sm -mt-4">(MRP Incl. of all taxes)</p>


                    <div className="border rounded-4xl bg-[#DAE7FF] p-4 items-center justify-between w-5/6">
                        <p className="text-2xl text-[#113F8A] font-semibold">
                            Best Price ₹519
                        </p>
                        <div className="flex space-x-20">
                            <div>
                                <p className="text-sm text-gray-500">
                                    Save 20% + prepaid discount
                                </p>
                            </div>
                            <button className="bg-[#113F8A] text-white px-4 py-1 ml-10 rounded-4xl font-medium">
                                SHARK20
                            </button>
                        </div>
                    </div>

                    {/* Size Options */}
                    <div>
                        <h2 className="font-semibold text-gray-700 mb-2">
                            Size: 1-Month Pack
                        </h2>

                        <div className="flex gap-2 flex-wrap">
                            {/* Card 1 */}
                            <div className="border-2 border-[#4CAF50] rounded-2xl bg-[#DAE7FF] w-32 flex flex-col space-y-2 text-center">
                                <div className="bg-[#1CA672] w-full rounded-t-2xl">
                                    <p className="text-white font-semibold m-2">SAVE 20%</p>
                                </div>
                                <p className="font-medium text-[#335B9E]">1-Month Pack</p>
                                <p className="text-[#335B9E] text-xl font-bold">Best Price</p>
                                <p className="text-xl text-[#335B9E] font-bold">₹519</p>
                                <p className="text-lg text-gray-500 line-through font-medium">
                                    MRP ₹649
                                </p>
                                <div>
                                    <div className="w-full bg-[#113F8A] h-0.5"></div>
                                    <p className="text-sm rounded-2xl text-white bg-[#113F8A] mx-3 relative bottom-2">
                                        most popular
                                    </p>
                                </div>
                                <p className="text-xs text-[#173EFD] pb-3">Free Derma Roller</p>
                            </div>

                            {/* Card 2 */}
                            <div className="border-2 border-[#4CAF50] rounded-2xl bg-[#F3FBFC] w-32 flex flex-col space-y-2 text-center">
                                <div className="bg-[#1CA672] w-full rounded-t-2xl">
                                    <p className="text-white font-semibold m-2">SAVE 20%</p>
                                </div>
                                <p className="font-medium text-[#335B9E]">2-Month Pack</p>
                                <p className="text-[#335B9E] text-xl font-bold">Best Price</p>
                                <p className="text-xl text-[#335B9E] font-bold">₹999</p>
                                <p className="text-lg text-gray-500 line-through font-medium">
                                    MRP ₹1249
                                </p>
                                <div className="w-full bg-[#113F8A] h-0.5"></div>
                                <p className="text-xs text-[#173EFD] pb-3 pt-4">
                                    Free Derma Roller
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="border-2 border-[#4CAF50] rounded-2xl bg-[#F3FBFC] w-32 flex flex-col space-y-2 text-center">
                                <div className="bg-[#1CA672] w-full rounded-t-2xl">
                                    <p className="text-white font-semibold m-2">SAVE 20%</p>
                                </div>
                                <p className="font-medium text-[#335B9E]">3-Month Pack</p>
                                <p className="text-[#335B9E] text-xl font-bold">Best Price</p>
                                <p className="text-xl text-[#335B9E] font-bold">₹1499</p>
                                <p className="text-lg text-gray-500 line-through font-medium">
                                    MRP ₹1899
                                </p>
                                <div className="w-full bg-[#113F8A] h-0.5"></div>
                                <p className="text-xs text-[#173EFD] pb-3 pt-4">
                                    Free Derma Roller
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="flex items-center gap-4">
                        <div className="flex items-center border rounded-full px-3 py-1">
                            <button className="text-lg px-2">-</button>
                            <span className="px-3">1</span>
                            <button className="text-lg px-2">+</button>
                        </div>
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full">
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
            {/* {Frequently Bought Together} */}

            <h1 className="text-xl font-semibold text-[#113F8A] mb-6 p-1 pl-65">
                Frequently Bought Together
            </h1>

            <div className="w-full flex justify-center">
                <div className="bg-[#DAE7FF] rounded-3xl p-6 w-11/12 md:w-4/6 flex flex-col shadow-sm">


                    <div className="flex flex-col md:flex-row md:items-center gap-6 rounded-md">


                        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row gap-6 flex-1">
                            {FrequentlyBought.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center rounded-2xl transition-all duration-300 w-full md:w-40 lg:w-48"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-40 md:h-48 rounded-2xl object-cover"
                                    />

                                    <div className="text-base font-semibold text-[#113F8A] text-center mt-2 h-12 line-clamp-2">
                                        {item.name}
                                    </div>

                                    <div className="text-sm font-semibold text-gray-500 mt-1">
                                        {item.price}
                                    </div>
                                </div>
                            ))}
                        </div>


                        <div className="md:pl-10 flex flex-col space-y-2.5 items-start md:items-start pb-2 md:pb-0">
                            <h1 className="text-xl text-[#18458E] font-semibold">Total Price</h1>
                            <p className="text-xl font-bold text-[#18458E]">₹ 1697</p>
                            <button className="px-5 py-2 rounded-2xl bg-[#113F8A] text-white font-semibold hover:bg-[#18458E] transition-all duration-200">
                                Add Selected to Cart
                            </button>
                        </div>

                    </div>
                </div>
            </div>


            <div className="w-full flex justify-center mt-6">
                <div className="w-4/5">
                    <img
                        src="https://www.arata.in/cdn/shop/files/IHGS_PDP_1_copy_2d7c239d-ade8-45dc-b713-acf8d4943027.jpg?v=1753093003&width=2000"
                        alt="Product Banner"
                        className="rounded-3xl w-full object-cover h-[500px]"
                    />
                </div>
            </div>

            {/* benifits */}

            <div>
                <div className="flex w-full justify-center pt-5">
                    <h1 className="text-2xl text-[#12556A]  font-semibold">Benifits</h1>
                </div>
                <div className="w-full flex flex-wrap justify-center gap-45 mt-6">
                    {benifits.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-4 hover:shadow-md transition-all duration-300 w-40"
                        >
                            <img
                                src={item.image}
                                alt={item.heading}
                                className="w-30 h-30 object-contain mb-3"
                            />
                            <h1 className="text-sm font-semibold text-[#1D1D1B] leading-tight break-words line-clamp-2">
                                {item.heading}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex w-full justify-center pt-8">
                <h1 className="text-2xl text-[#12556A] font-semibold">Science Backed Formula</h1>
            </div>
            <div className="w-full flex justify-center mt-6">
                <div className="w-5/6">
                    <img
                        src="https://www.arata.in/cdn/shop/files/arata-intensive-hair-growth-serum-ingredients-desktop.webp?v=1749896611&width=1600"
                        alt="Hair Growth Serum Ingredients"
                        className="w-full"
                    />
                </div>
            </div>

            <div className="flex w-full justify-center pt-8 pb-10">
                <h1 className="text-2xl text-[#12556A] font-semibold">Real People, Real Results.</h1>
            </div>

            <div className="flex w-full gap-3 justify-center">
                {result.map((image, index) => (
                    <div key={index}>
                        <img src={image} className="w-96" alt="error" />
                    </div>
                ))}
            </div>
            <Review />
            <WaytoUse />
            <CustomerReviews />
            <Review2 />

            {/* <div>
                <h1>Recently Viewed Products</h1>
            </div> */}


        </div>
    );
};

export default Product;
