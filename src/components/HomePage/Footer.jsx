import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#0E3C87] text-white pt-12 pb-6 font-sans rounded-t-4xl">
            {/* Newsletter Section */}
            <div className="bg-[#1A4DA1] rounded-2xl mx-4 md:mx-16 p-8 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-2xl font-medium mb-2">
                        Your Inbox Deserves Some Rejuvenation Too
                    </h2>
                    <p className="text-sm text-gray-200">
                        Sign up for special offers, Arata news, tips, and more!
                    </p>
                </div>

                <div className="flex items-center w-full md:w-1/3 bg-white rounded-full overflow-hidden mt-4 md:mt-0">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
                    />
                    <button className="bg-[#0E3C87] text-white px-4 py-2 rounded-r-full hover:bg-[#08285e] transition">
                        →
                    </button>
                </div>
            </div>

            {/* Links Section */}
            <div className="mx-4 md:mx-16 mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div>
                    <h3 className="font-semibold mb-3">SHOP</h3>
                    <ul className="space-y-1 text-gray-200 text-sm">
                        <li>Hair Damage</li>
                        <li>Hair Growth</li>
                        <li>Anti Dandruff</li>
                        <li>Hair Styling</li>
                        <li>Curl Care</li>
                        <li>Face Care</li>
                        <li>Body Care</li>
                        <li>Shop All</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">ABOUT</h3>
                    <ul className="space-y-1 text-gray-200 text-sm">
                        <li>About Arata</li>
                        <li>Blog</li>
                        <li>Track Your Order</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">NEED HELP?</h3>
                    <ul className="space-y-1 text-gray-200 text-sm">
                        <li>My Account</li>
                        <li>Return & Refund Policy</li>
                        <li>Shipping</li>
                        <li>FAQ</li>
                        <li>Loyalty Programme</li>
                        <li>Privacy Policy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="text-sm text-gray-200">
                    <h3 className="font-semibold mb-3">Contact Us</h3>
                    <p>📧 info@arata.in</p>
                    <p>📞 1800 103 5572</p>
                    <p className="mt-4">
                        D–1, 1st Floor, Local Shopping Centre, Soami Nagar, New Delhi, India
                        – 110017
                    </p>
                </div>
            </div>

            {/* Bottom Logo & Copyright */}
            <div className="text-center mt-12 border-t border-blue-400 pt-6">
                <h1 className="text-3xl font-bold tracking-widest mb-2">ARATA</h1>
                <p className="text-xs text-gray-300">
                    ©2025 Slick Organics Private Limited
                </p>
                <p className="text-xs text-gray-300 mt-1">
                    U36989DL2017PTC314502
                </p>
            </div>
        </footer>
    );
};

export default Footer;
