'use client';
import React from "react";

const ContactUs = () => {
    return (
        <section className="bg-gradient-to-br from-black via-purple-800 to-black text-white py-12 px-6 md:px-12">
            <h3 className="font-medium text-xl ml-20">Contact Us</h3>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Section */}
                <div>
                    <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
                    <p className="text-gray-300 text-sm md:text-base mb-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                    {/* Social Icons */}
                    <div className="flex gap-4">
                        {["youtube", "linkedin", "twitter", "facebook", "instagram"].map((platform, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="w-12 h-12 flex justify-center items-center rounded-lg bg-gray-800 hover:bg-purple-600 transition duration-300"
                                aria-label={platform}
                            >
                                <i className={`fab fa-${platform} text-xl text-white`}></i>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Section */}
                <div>
                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* First Name */}
                        <div className="flex flex-col">
                            <label htmlFor="firstName" className="text-sm mb-1">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                placeholder="Type Here"
                                className="rounded-md border bg-transparent border-white  text-black p-3 focus:outline-none focus:border-purple-500"
                            />
                        </div>

                        {/* Last Name */}
                        <div className="flex flex-col">
                            <label htmlFor="lastName" className="text-sm mb-1">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Type Here"
                                className="rounded-md border bg-transparent border-white  text-blck p-3 focus:outline-none focus:border-purple-500"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Type Here"
                                className="rounded-md bg-transparent border border-white  text-black p-3 focus:outline-none focus:border-purple-500"
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col">
                            <label htmlFor="phone" className="text-sm mb-1">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="Type Here"
                                className="rounded-md bg-transparent border border-white  text-black p-3 focus:outline-none focus:border-purple-500"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col col-span-2">
                            <label htmlFor="message" className="text-sm mb-1">Message</label>
                            <textarea
                                id="message"
                                placeholder="Type Here"
                                rows="3"
                                className="rounded-md bg-transparent border border-white text-black p-3 focus:outline-none focus:border-purple-500"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="col-span-2 ">
                            <button
                                type="submit"
                                className="px-8 py-1 border-purple-600 bg-purple-600 hover:bg-purple-800 text-white rounded-full font-slate text-lg transition duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
