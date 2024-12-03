import React from "react";

const NewsletterSignup = () => {
    return (
        <section className="bg-black text-white py-10 px-5">
            <h2 className="text-4xl font-bold ml-24 mb-6">Newsletter Signup</h2>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                {/* Text Section */}
                <div className="md:w-1/2 space-y-4 mr-6">
                    <p className="text-gray-300">
                        Subscribe to our newsletter for exclusive updates, latest
                        technology, and more! Enter your email address to receive the latest
                        gaming news and special offers.
                    </p>
                </div>

                {/* Input Section */}
                <div className="md:w-1/2 relative">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full py-3 pl-4 pr-24 bg-transparent border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <button
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-md font-medium"
                    >
                        Play Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSignup;

