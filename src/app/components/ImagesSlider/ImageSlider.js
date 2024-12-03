import React from "react";
import styles from "./ImageSlider.module.css";
import images from "./images";

const ImageSlider = () => {
    return (
        <div className="relative overflow-hidden bg-black text-white py-6">
            <h2 className="text-center text-3xl font-bold py-4">Gallery</h2>
            <div className={`${styles.slider} flex`}>
                {/* Render images twice to ensure seamless looping */}
                {[...images, ...images].map((image, index) => (
                    <div
                        key={index}
                        className={`${styles.slide} w-[300px] sm:w-[200px] lg:w-[250px]`}
                    >
                        <img
                            src={image}
                            alt={`Gallery Image ${index + 1}`}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;


