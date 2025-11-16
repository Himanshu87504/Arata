import React, { useState } from "react";
import imageUserCart from "../HomePage/imageUseCart.json";
import { useNavigate } from "react-router-dom";

const Cart = ({ buttonNames }) => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState(buttonNames[0]);

    const handleButtonClick = (name) => {
        setSelectedCategory(name);
    };

    const categoryData = imageUserCart.categories.find(
        (cat) => cat.title.toUpperCase() === selectedCategory?.toUpperCase()
    );

    return (
        <div className="p-6 bg-[#F0F5FF] space-y-6">

            {/* Category Button Row */}
            <div className="overflow-x-auto md:overflow-visible hide-scrollbar md:pl-28">
                <div className="flex gap-4 py-2 px-4 sm:px-6 md:px-8 w-max md:w-full">
                    {buttonNames.map((name, index) => (
                        <button
                            key={index}
                            onClick={() => handleButtonClick(name)}
                            className={`font-semibold border-2 px-4 py-1 rounded-full uppercase transition 
                                ${selectedCategory === name
                                    ? "text-[#113F8A] border-[#113F8A] bg-[#CAD9F6]"
                                    : "text-gray-400 border-gray-300 hover:text-[#113F8A] hover:border-[#113F8A]"
                                }`}
                        >
                            {name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Cards */}
            {categoryData && (
                <div className="mt-8">
                    <div className="flex justify-center gap-4 flex-wrap group">

                        {categoryData.images.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 w-[220px] cursor-pointer"
                                onClick={() => navigate("/product")}
                            >

                                {/* Hover Image Swap */}
                                <div className="relative w-full h-[250px] overflow-hidden rounded-xl">
                                    <img
                                        src={item.main}
                                        alt={item.name}
                                        className="w-full h-full object-cover transition-all duration-700 hover:opacity-0 hover:scale-105"
                                    />
                                    <img
                                        src={item.subImage}
                                        alt={`${item.name} sub`}
                                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 hover:opacity-100 hover:scale-105"
                                    />
                                </div>

                                {/* Bestseller Tag */}
                                <div className="bg-[#0F397C] text-white text-xs flex justify-center">
                                    BESTSELLER
                                </div>

                                {/* Product Info */}
                                <div className="p-2">
                                    <div className="flex items-center gap-5 text-sm font-medium mt-1">
                                        <span className="text-yellow-500">⭐ {item.rating}</span>
                                        <span className="text-[#6E8AB8]">13565 reviews</span>
                                    </div>

                                    <h3 className="font-semibold text-[#244F93] mt-1">
                                        {item.name}
                                    </h3>

                                    <p className="text-sm text-[#4166A2] mt-1">
                                        {item.description}
                                    </p>

                                    <div className="flex justify-between items-center mt-2">
                                        <span className="font-bold text-2xl text-[#000072]">
                                            {item.price}
                                        </span>
                                    </div>

                                    <button className="w-full mt-2 rounded-4xl bg-[#FFD812] p-2 text-lg font-bold">
                                        ADD TO CART
                                    </button>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            )}

        </div>
    );
};

export default Cart;
