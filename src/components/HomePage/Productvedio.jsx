import React from "react";

const ProductVideo = () => {
    const shortVideos = [
        {
            videoUrl:
                "https://www.arata.in/cdn/shop/files/quinn_h8lg400fs1q66q3g9711y8cw.mp4#t=0.1",
            productImage:
                "https://www.arata.in/cdn/shop/files/1_7e1f3d1e-9a22-4e7e-9461-b4a68a93b0a1_720x.jpg?v=1759662112",
            productName:
                "Hair Growth Serum for Men and Women | Hair Repair Formula",
            price: "₹649",
        },
        {
            videoUrl:
                "https://www.arata.in/cdn/shop/files/quinn_jhjrnr6yjqqlm0b41klj00ch.mp4#t=0.1",
            productImage:
                "https://www.arata.in/cdn/shop/files/Arata_Anti-Hair_Fall_New_Launch_HD.webp?v=1761892915&width=2000",
            productName: "6-in-1 Super Shampoo | Hair Loss Reduction & Shine Boost",
            price: "₹899",
        },
        {
            videoUrl:
                "https://www.arata.in/cdn/shop/files/quinn_h8lg400fs1q66q3g9711y8cw.mp4#t=0.1",
            productImage:
                "https://www.arata.in/cdn/shop/files/Arata_IHGS_DEAL40_HD.webp?v=1760005443&width=2000",
            productName: "Intensive Hair Growth Serum | Derma Roller Combo",
            price: "₹749",
        },
        {
            videoUrl:
                "https://www.arata.in/cdn/shop/files/quinn_wovcliyvtlwp6xujoe2rk528.mp4#t=0.1",
            productImage:
                "https://www.arata.in/cdn/shop/files/Arata_Anti-Hair_Fall_New_Launch_HD_d7e40f25-1d47-456c-873a-340a156a200a.webp?v=1761892915&width=2000",
            productName: "Ultralight Super Serum for Beautiful Hair & Shine",
            price: "₹749",
        },
        {
            videoUrl:
                "https://www.arata.in/cdn/shop/files/quinn_h8lg400fs1q66q3g9711y8cw.mp4#t=0.1",
            productImage:
                "https://www.arata.in/cdn/shop/files/Arata_IHGS_DEAL40_HD.webp?v=1760005443&width=2000",
            productName: "Hair Growth Serum | Visible Results in 90 Days",
            price: "₹649",
        },
    ];
    const logos = [
        "https://www.arata.in/cdn/shop/files/UBiWgg_2.png?v=1734693359&width=400",
        "https://www.arata.in/cdn/shop/files/UBiWgg_1.png?v=1734693359&width=400",
        "https://www.arata.in/cdn/shop/files/Ql1QMt_tif.png?v=1734693359&width=400",
        "https://www.arata.in/cdn/shop/files/Group_240845.png?v=1734693359&width=400",
        "https://www.arata.in/cdn/shop/files/layer1-1_3fbe90fe-1620-4ca8-b880-58b0ece11f54.png?v=1734693359&width=400",
        "https://www.arata.in/cdn/shop/files/path2987_1529c4fc-dbfa-48f7-a6b5-31aed8eb8999.png?v=1734688345&width=400",
        "https://www.arata.in/cdn/shop/files/Group_240591.png?v=1734688344&width=400",
        "https://www.arata.in/cdn/shop/files/UBiWgg_2.png?v=1734693359&width=400",
        "https://www.arata.in/cdn/shop/files/Ql1QMt_tif.png?v=1734693359&width=400",
        "https://www.arata.in/cdn/shop/files/UBiWgg_1.png?v=1734693359&width=400",
    ];

    const journeyData = [
        {
            media: "https://www.arata.in/cdn/shop/files/Flaxseed_Pouring_1.gif?v=1735709466&width=400", // replace with real video/image URL

            desc: "9 years in, we have 70+ products perfected for Indian hair",
        },
        {
            media: "https://www.arata.in/cdn/shop/files/Product_Range.gif?v=1735805006&width=700",

            desc: "9 years in, we have 70+ products perfected for Indian hair",
        },
        {
            media: "https://www.arata.in/cdn/shop/files/48872504210437246271_1.gif?v=1736753826&width=800",

            desc: "9 years in, we have 70+ products perfected for Indian hair",
        },
        {
            media: "https://www.arata.in/cdn/shop/files/48872504210437246271_1.gif?v=1736753826&width=800",

            desc: " 9 years in, we have 70+ products perfected for Indian hair we bring our science-backed formulas to life",
        },
    ];

    return (
        <div className="bg-[#F0F5FF] py-8 px-4">

            {/* Scrollable container */}
            <div className="flex gap-5 overflow-x-auto hide-scrollbar">
                {shortVideos.map((item, index) => (
                    <div
                        key={index}
                        className="w-[300px] rounded-3xl bg-[#F0F5FF] overflow-hidden transition-all duration-300 flex-shrink-0"
                    >
                        {/* Video */}
                        <video
                            src={item.videoUrl}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-[500px] object-cover rounded-4xl"
                        />

                        {/* Product info card */}
                        <div className="flex items-center gap-3 bg-white shadow-md mx-auto rounded-full w-[250px] h-[70px] -mt-6 relative z-10 px-3">
                            <img
                                src={item.productImage}
                                alt={item.productName}
                                className="w-[60px] h-[80px] rounded-full border border-gray-200 object-cover relative mb-14 "
                            />
                            <div className="flex flex-col justify-center">
                                <p className="text-[#6A87B6] text-sm font-medium leading-tight line-clamp-2">
                                    {item.productName}
                                </p>
                                <p className="text-[#113F8A] font-bold text-base mt-1">
                                    {item.price}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className=" py-12 px-6 md:px-12">
                <div className="flex justify-between">
                    <div className="text-center mb-8 pl-22">
                        <h3 className="text-[#113F8A] text-3xl pl-3 font-medium tracking-wide">
                            The Arata Story
                        </h3>
                        <h2 className="text-[#113F8A] text-3xl md:text-4xl font-bold">
                            Our Journey
                        </h2>
                    </div>

                    <div className="p-2 pr-18">
                        <button className="bg-[#113F8A] text-white rounded-full hover:bg-[#0c2d63] transition-all p-3">
                            Know More
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6 w-full">
                    {journeyData.map((item, index) => (
                        <div
                            key={index}
                            className=" rounded-3xl overflow-hidden transform  transition-all duration-300 w-[300px]"
                        >
                            {/* Media */}
                            <img
                                src={item.media}
                                alt={item.highlight}
                                className="w-full h-[400px] object-cover rounded-t-3xl"
                            />

                            {/* Content */}
                            <div className="bg-[#DAE7FF] p-4 h-full">
                                <p className="text-[#2D569A] text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
            {/* logo slide bar */}
            <div className="w-full flex justify-center">
                <div className="flex overflow-x-auto scroll-smooth p-4 bg-[#DAE7FF] space-x-6 hide-scrollbar rounded-full w-7xl h-22">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-1/5 flex justify-center items-center"
                        >
                            <img
                                src={logo}
                                alt={`logo-${index}`}
                                className="w-4/5 h-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* youtube */}
            <div>
                <div className="bg-[#f2f6ff] py-16">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 px-6">

                        {/* Left Side - Video */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                                    src="https://www.youtube.com/embed/AVAEKjkVV4Q"
                                    title="Arata Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        {/* Right Side - Text */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a3b7a] leading-snug mb-4">
                                Where Indian Hair <br />
                                <span className="text-[#004aad] font-bold">Takes Centre Stage</span>
                            </h2>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                                We believe that the best results come from a process that's honest
                                and full of care. In a state-of-the-art innovation center, we follow
                                a rigorous 5-step process to develop hair beauty solutions that are
                                effective and proudly Indian.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductVideo;
