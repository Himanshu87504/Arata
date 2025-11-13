import React, { useState } from "react";
import Cart from "./Cart";
import Productvedio from "./Productvedio";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainPage = () => {
    const images = [
        "https://www.arata.in/cdn/shop/files/Arata_IHGS_DEAL40_HD.webp?v=1760005443&width=2000",
        "https://www.arata.in/cdn/shop/files/Arata_Anti-Hair_Fall_New_Launch_HD_d7e40f25-1d47-456c-873a-340a156a200a.webp?v=1761892915&width=2000",
        "https://www.arata.in/cdn/shop/files/Arata_IHGS_DEAL40_HD.webp?v=1760005443&width=2000",
        "https://www.arata.in/cdn/shop/files/Arata_SS_DEAL35_HD_784c9728-be17-4868-9651-e293de2f0afd.webp?v=1759753503&width=2000",
        "https://www.arata.in/cdn/shop/files/Arata_AntiGrey_HP__Desktop_b0d8fa2e-3ef8-4123-809d-54f3806e4fc0.webp?v=1755581367&width=2000"
    ];

    const images2 = [
        "https://www.arata.in/cdn/shop/files/01._NEW_LAUNCH_-_Anti-Hair_Fall.webp?v=1761895042&width=400",
        "https://www.arata.in/cdn/shop/files/Hair_Growth_bf712b24-fe73-419f-ac6f-d584be86b924.webp?v=1752555392&width=400",
        "https://www.arata.in/cdn/shop/files/Anti_Dandruff_85031ac6-656b-4e99-b688-80ac6e1eeeff.webp?v=1752555413&width=400",
        "https://www.arata.in/cdn/shop/files/Frizz_Control.webp?v=1752555433&width=400",
        "https://www.arata.in/cdn/shop/files/Hair_Styling_edb4770f-5f1c-4291-a8f6-cd709fb711f8.webp?v=1752555485&width=400",
        "https://www.arata.in/cdn/shop/files/Hair_Styling_edb4770f-5f1c-4291-a8f6-cd709fb711f8.webp?v=1752555485&width=400",
        "https://www.arata.in/cdn/shop/files/Face_Care_4cd38dfd-5e9f-4f69-9425-0e2c5cc9a521.webp?v=1752555519&width=400",

    ]
    const image3 = [
        "https://www.arata.in/cdn/shop/files/Arata_MS_2IN1_D.webp?v=1762407941&width=2000",
        "https://www.arata.in/cdn/shop/files/Arata_MS_699_D.webp?v=1758812900&width=1600",
        "https://www.arata.in/cdn/shop/files/Arata_MS_ADD_D_1.webp?v=1758813409&width=1600",
        "https://www.arata.in/cdn/shop/files/Arata_MS_899_D.webp?v=1758813152&width=1600"

    ]

    const image4 = [
        "https://www.arata.in/cdn/shop/files/Bestseller_2.webp?v=1761904573&width=600",
        "https://www.arata.in/cdn/shop/files/Bestseller_2.webp?v=1761904573&width=600",
        "https://www.arata.in/cdn/shop/files/Bestseller_2.webp?v=1761904573&width=600",
        "https://www.arata.in/cdn/shop/files/Bestseller_2.webp?v=1761904573&width=600",
        "https://www.arata.in/cdn/shop/files/Bestseller_2.webp?v=1761904573&width=600",
    ]
    const buttonNames1 = [
        "CUSTOMERS' FAV",
        "SHARKS' FAVS",
        "New LAUNCH",
        "SUPER SAVER",
    ];

    const buttonNames2 = [
        "HAIR GROWTH",
        "DAMAGE REPAIR",
        "HAIR STYLING",
        "BODYCARE",
        "FACECARE"
    ];

    const GoodStuff = [
        "https://www.arata.in/cdn/shop/files/Group_240855.svg?v=1735552041&width=200",
        "https://www.arata.in/cdn/shop/files/Group-3.svg?v=1735552060&width=200",
        "https://www.arata.in/cdn/shop/files/Group-2.svg?v=1735552145&width=200",
        "https://www.arata.in/cdn/shop/files/Group.svg?v=1735552083&width=200",
        "https://www.arata.in/cdn/shop/files/Frame_240609.svg?v=1735552019&width=200",
        "https://www.arata.in/cdn/shop/files/Group-1.svg?v=1735552169&width=200"

    ]

    const Stores = [
        "https://www.arata.in/cdn/shop/files/Asset_3_d001c675-e911-4556-ab40-02ca2bc23e86.png?v=1753247739&width=50",
        "https://www.arata.in/cdn/shop/files/Asset_2_66853cb9-35ab-4ebf-8984-33cb8f8474f7.png?v=1753247715&width=200",
        "https://www.arata.in/cdn/shop/files/Asset_5_1fddaf33-d0f9-49a4-baba-b4e4f1feec8f.png?v=1753247779&width=100",
        "https://www.arata.in/cdn/shop/files/Asset_9.png?v=1753247926&width=400",
        "https://www.arata.in/cdn/shop/files/Asset_4_ed4398bd-a440-4b70-b350-34bbd2d598ce.png?v=1753247757&width=100",
        "https://www.arata.in/cdn/shop/files/Asset_6_12d1db2e-ff89-44a5-a666-67e01e004426.png?v=1753247805&width=100",
        "https://www.arata.in/cdn/shop/files/Asset_7_1.png?v=1753247827&width=400",
        "https://www.arata.in/cdn/shop/files/Asset_8_663f6288-a644-4a7d-89ee-ee5d34f6884a.png?v=1753247845&width=400"
    ]


    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const handleDotClick2 = (index) => {
        setCurrentIndex2(index);
    };

    return (
        <div className="bg-[#F0F5FF]">
            <Navbar />
            <div className="flex flex-col items-center w-full h-full bg-[#F0F5FF] ">
                {/* Image */}
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className="w-full h-full  transition-all duration-700"
                />

                {/* Dots */}
                <div className="flex gap-3 my-4 relative top-3">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? "bg-gray-800 w-8"
                                : "bg-gray-400 w-3 hover:bg-gray-500"
                                }`}
                        ></button>
                    ))}
                </div>
            </div>
            <div className="w-full bg-[#F0F5FF] py-8 flex justify-center gap-6 overflow-hidden">
                {images2.map((image, index) => (
                    <div
                        key={index}
                        className="flex-1 max-w-[400px] bg-[#F0F5FF] z-10"
                    >
                        <img
                            src={image}
                            alt={`Image ${index}`}
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>

            <div className="w-full flex justify-center">
                <div className="flex flex-col items-center md:w-5/6 w-full m-1 md:m-0.5">
                    <img
                        src={image3[currentIndex2]}
                        alt={`Slide ${currentIndex2}`}
                        className="w-full h-80 rounded-4xl  transition-all duration-700 "
                    />
                    <div className="flex gap-3 my-4 relative top-3">
                        {image3.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick2(index)}
                                className={`h-1 rounded-full transition-all duration-300 ${index === currentIndex2
                                    ? "bg-gray-800 w-8"
                                    : "bg-gray-400 w-3 hover:bg-gray-500"
                                    }`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-6 sm:pl-10 lg:pl-33">
                    <h1 className="text-[#113F8A] font-normal text-2xl sm:text-3xl lg:text-4xl leading-snug">
                        Beautiful Hair Begins Here{" "}
                        <span className="text-[#113F8A] font-bold block">
                            Our Bestseller
                        </span>
                    </h1>
                </div>

                <div className="flex sm:w-full gap-2 justify-center w-3xl overflow-hidden">
                    {image4.map((image, index) => (
                        <div key={index} className="w-60 ">
                            <img
                                src={image}
                                alt={`Image ${index}`}
                                className="sm:w-full w-20 "
                            />
                        </div>
                    ))}
                </div>

            </div>
            <h1 className="text-[#113F8A] text-3xl font-normal pt-5 pl-10 md:pl-40">Perfect For Indian Hair <br /> Our Top Essentials</h1>
            <Cart buttonNames={buttonNames1} />
            <Productvedio className="sidebar hidden" />
            <h1 className="text-[#113F8A] text-3xl font-bold pl-40"> Shope By Collection</h1>
            <Cart buttonNames={buttonNames2} />

            <div className="w-full">
                <h1 className="text-[#113F8A] text-4xl font-semibold pt-3 pb-3  pl:20 md:pl-40">Just the Good Stuff</h1>
                <div className="flex justify-center gap-25 pt-3">
                    {GoodStuff.map((item, index) => (
                        <div>
                            <img src={item} alt="" />
                        </div>
                    ))}
                </div>

            </div>

            <div>
                <div className="pt-4 pb-6">
                    <h1 className="pl-40 p-5 text-3xl text-[#113F8A] font-bold pt-4 pb-3">Now Find Us <span className="font-normal text-3xl"><br /> At Your Faviorite Stores</span></h1>
                    <div>
                        <div className="w-full flex justify-center pl-4">
                            <div className="flex overflow-x-auto scroll-smooth gap-4 p-4 hide-scrollbar w-5/6  bg-[#113F8A] rounded-4xl">
                                {Stores.map((store, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 w-1/5 flex justify-center items-center"
                                    >
                                        <img
                                            src={store}
                                            alt={`store-${index}`}
                                            className="w-[80px] h-[60px] object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainPage;
