import React, { useState } from "react";
import imageUserCart from "../HomePage/imageUseCart.json";

const Cart = ({ buttonNames }) => {

    const [selectedCategory, setSelectedCategory] = useState(buttonNames[0]);

    const handleButtonClick = (name) => {
        setSelectedCategory(name);
    };

    const categoryData = imageUserCart.categories.find(
        (cat) => cat.title.toUpperCase() === selectedCategory?.toUpperCase()
    );

    return (
        <div className="p-6 bg-[#F0F5FF] space-y-6">

            <div className="overflow-x-auto md:overflow-visible hide-scrollbar  md:pl-28">
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




            {categoryData && (
                <div className="mt-8">
                    <div className="flex justify-center gap-4 flex-wrap  group">
                        {categoryData.images.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 w-[220px] "
                            >

                                <div className="relative w-full h-[250px] overflow-hidden hover:shadow-lg transition-all duration-500 rounded-xl">
                                    <img
                                        src={item.main}
                                        alt={item.name}
                                        className="w-[300px] h-full object-cover transition-all duration-700 hover:opacity-0 hover:scale-105"
                                    />
                                    <img
                                        src={item.subImage}
                                        alt={`${item.name} sub`}
                                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 hover:opacity-100 hover:scale-105"
                                    />
                                </div>

                                <div className="bg-[#0F397C] text-white text-xs flex justify-center">BESTSELLER</div>

                                <div className="p-1 ">
                                    <div className="flex justify-between items-center text-sm font-medium">

                                        <div className="flex justify-between items-center text-sm font-medium gap-5 pt-1">
                                            <span className="text-yellow-500">⭐ {item.rating} </span>
                                            <span className="text-[#6E8AB8]">13565 reviews</span>
                                        </div>
                                    </div>
                                    <h3 className="font-semibold text-[#244F93] pt-1">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-[#4166A2]  pt-1">
                                        {item.description}
                                    </p>
                                    <div className="flex justify-between items-center text-sm font-medium">
                                        <span className=" font-bold text-2xl text-[#000072]">{item.price}</span>

                                    </div>
                                    <button className="w-full rounded-4xl bg-[#FFD812] p-1 text-1xl font-bold">ADD TO CART</button>
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
