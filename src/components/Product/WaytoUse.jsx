import React, { useState } from 'react'

const WaytoUse = () => {
    const way = [
        {
            step: 1,
            title: "Step 1",
            description: "Use a dermaroller on a clean and dry scalp to stimulate hair follicles.",
            image: "https://www.arata.in/cdn/shop/files/IHGS_A_H2U.1-ezgif.com-optimize.gif?v=1752748148&width=400"
        },
        {
            step: 2,
            title: "Step 2",
            description: "Squeeze the dropper to draw 1ml of serum.",
            image: "https://www.arata.in/cdn/shop/files/IHGS_A_H2U.1-ezgif.com-optimize.gif?v=1752748148&width=400"
        },
        {
            step: 3,
            title: "Step 3",
            description: "Apply the serum evenly on parted sections of the scalp.",
            image: "https://www.arata.in/cdn/shop/files/IHGS_A_H2U.1-ezgif.com-optimize.gif?v=1752748148&width=400"
        },
        {
            step: 4,
            title: "Step 4",
            description: "Massage gently with fingertips to aid absorption.",
            image: "https://www.arata.in/cdn/shop/files/IHGS_A_H2U.1-ezgif.com-optimize.gif?v=1752748148&width=400"
        }
    ];

    const data = [
        { title: "Description", content: "This is the description content." },
        { title: "Benefits", content: "These are the benefits of the product." },
        { title: "How To Use", content: "Here is how to use the product." },
        { title: "FAQ", content: "Frequently asked questions go here." }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <div className="p-4 flex justify-center">
                {/* <h1 className="text-xl font-semibold mb-4">Best Way to Use</h1> */}

                <div className="flex gap-4 overflow-x-auto pb-3">
                    {way.map((item, index) => (
                        <div
                            key={index}
                            className="w-[300px] "
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full"
                            />

                            <h2 className="text-sm font-semibold mt-2 pl-1">{item.title}</h2>
                            <p className="text-gray-600 text-sm pl-1">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto">
                {data.map((item, index) => (
                    <div key={index} className="mb-2">

                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex justify-between items-center bg-[#E0E6F4] px-4 py-1 text-left text-sm font-medium text-blue-900 rounded-md"
                        >
                            {item.title}

                            {/* ICON */}
                            <div className="w-10 h-6 bg-blue-900 text-white flex items-center justify-center rounded-md text-sm">
                                {openIndex === index ? "−" : "+"}
                            </div>
                        </button>


                        {openIndex === index && (
                            <div className="bg-[#E9EAF4] p-4 text-gray-700 border border-blue-100 rounded-b-md">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WaytoUse;
