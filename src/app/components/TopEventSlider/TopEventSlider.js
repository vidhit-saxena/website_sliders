import React from "react";
import styles from "./TopEventSlider.module.css";
import data from "./data";

const TopEventSlider = () => {
    // Duplicate the data for seamless scrolling
    const sliderData = [...data, ...data];

    return (
        <div className="relative overflow-hidden bg-black py-6">
            <h2 className="text-center text-3xl md:text-4xl font-bold py-4 text-white mb-2 mt-0">Top Events</h2>
            <div className={`${styles.slider} flex`}>
                {sliderData.map((item, index) => (
                    <div
                        key={index}
                        className="min-w-[300px] md:min-w-[400px] lg:min-w-[500px] flex-shrink-0 relative rounded-lg overflow-hidden shadow-lg mx-2"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-[200px] md:h-[300px] object-cover"
                        />
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
                            {/* Title at Top Left */}
                            <div className="absolute top-2 left-2 bg-opacity-0 px-3 py-1 rounded-md">
                                <h3 className="text-sm md:text-base font-semibold text-white">{item.title}</h3>
                            </div>

                            {/* Date at Top Right */}
                            <div className="absolute top-2 right-2 bg-gray-800 bg-opacity-0 px-3 py-1 rounded-md">
                                <p className="text-sm text-white">{item.date}</p>
                            </div>

                            {/* Description Horizontally Centered */}
                            <div className="w-full mx-4 md:mx-6 mt-auto bg-black bg-opacity-0 rounded-lg backdrop-blur-md p-3 mb-6 px-0">
                                <p className="text-sm md:text-base text-center text-white">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopEventSlider;

