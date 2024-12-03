import React from "react";
import Image from "next/image";
import logo from "../../../../public/images/logo.png"

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="max-w-7xl mx-auto px-5">
                {/* Top Section */}
                <div className="flex flex-col items-center space-y-4">
                    {/* Logo */}
                    <div>
                        <Image src={logo} alt="Logo" width={70} height={70} />
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <ul className="flex flex-wrap items-center justify-center space-x-6 text-md font-medium mb-2">
                            <li>
                                <a href="#" className="hover:text-gray-400">
                                    Who we are
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400">
                                    What we do
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400">
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400">
                                    Press
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-400">
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-6"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 mb-2">
                    <p className="text=gray-600">© 2024 Abreshevents. All rights reserved.</p>
                    <ul className="flex space-x-4 mt-4 md:mt-0">
                        <li>
                            <a href="#" className="hover:text-gray-200">
                                Terms
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-200">
                                Privacy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-200">
                                Cookies
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-200">
                                Refund
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

