// import React from "react";
// import styles from "./UpcomingEventsSlider.module.css";
// import data from "./data";

// const UpcomingEventsSlider = () => {
//     return (
//         <div className="relative bg-black text-white py-6">
//             <h2 className="text-center text-3xl md:text-4xl font-bold mb-6">Upcoming Events</h2>
//             <div className={`${styles.slider} flex gap-6 px-4`}>
//                 {data.map((item, index) => (
//                     <div
//                         key={index}
//                         className="min-w-[280px] md:min-w-[340px] lg:min-w-[400px] flex-shrink-0 rounded-lg overflow-hidden bg-gray-800 shadow-lg border-2 border-purple-500 relative"
//                     >
//                         <img
//                             src={item.image}
//                             alt={item.title}
//                             className="w-full h-[200px] md:h-[240px] object-cover"
//                         />
//                         <div className="p-4">
//                             <div className="flex items-center mb-2">
//                                 <span className="text-sm text-purple-400 flex items-center">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         strokeWidth="1.5"
//                                         stroke="currentColor"
//                                         className="w-4 h-4 mr-1"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M8.25 12.75h7.5m-7.5 3h4.5m-4.5-6h5.25M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
//                                         />
//                                     </svg>
//                                     {item.date}
//                                 </span>
//                             </div>
//                             <h3 className="text-lg font-semibold">{item.title}</h3>
//                             <p className="text-sm text-gray-300">{item.description}</p>
//                             <button className="mt-4 px-4 py-2 text-sm font-medium text-purple-500 bg-black border border-purple-500 rounded-full hover:bg-purple-500 hover:text-black transition duration-300">
//                                 Book Ticket
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default UpcomingEventsSlider;


import React from "react";
import styles from "./UpcomingEventsSlider.module.css";
import data from "./data";

const UpcomingEventsSlider = () => {
    return (
        <div className="relative bg-black text-white py-6">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-6">Upcoming Events</h2>
            <div className={`${styles.slider} flex gap-6 px-6 py-4`}>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="min-w-[220px] md:min-w-[280px] lg:min-w-[300px] flex-shrink-0 rounded-lg overflow-hidden bg-gray-800 shadow-lg border-2 border-purple-500 relative p-4"
                    >
                        {/* Image */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-[150px] md:h-[180px] object-cover rounded-md"
                        />

                        {/* Content */}
                        <div className="pt-4">
                            {/* Date and Button */}
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-white flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-4 h-4 mr-1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.25 12.75h7.5m-7.5 3h4.5m-4.5-6h5.25M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                                        />
                                    </svg>
                                    {item.date}
                                </span>
                                <button className="px-3 py-1 text-sm font-medium text-white bg-purple-600  rounded-full hover:bg-purple-800 hover:text-black transition duration-300">
                                    Book Ticket
                                </button>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold">{item.title}</h3>

                            {/* Description */}
                            <p className="text-sm text-gray-300 mt-1">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingEventsSlider;
