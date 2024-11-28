import React from "react";
import styles from "./ImageSlider.module.css";
import images from "./images";

const ImageSlider = () => {
    return (
        <div className="relative overflow-hidden bg-black text-white">
            <h2 className="text-center text-3xl font-bold py-4">Gallery</h2>
            <div className={styles.slider}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${styles.slide} w-full sm:w-1/3 md:w-1/4 lg:w-1/5`}
                    >
                        <img
                            src={image}
                            alt={`Gallery Image ${index + 1}`}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
