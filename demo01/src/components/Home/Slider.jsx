import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/blooming-pink-orchid-on-a-green-branch-dreaming2004.jpg",
    "https://images7.alphacoders.com/390/390310.jpg",
    "https://cdn.pixabay.com/photo/2022/05/01/17/42/blue-flowers-7168110_1280.jpg",
];

export default function ImageSlider() {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
    };

    return (
        <div>
            <div className="relative w-full h-180 mt-0 overflow-hidden">
                <div className="w-full h-full relative">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                        >
                            <img
                                src={img}
                                alt={`Slide ${index}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/40 hover:bg-white/80 text-white hover:text-black p-2 rounded-full z-20"
                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/40 hover:bg-white/80 text-white hover:text-black p-2 rounded-full z-20"
                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                >
                    <ChevronRight size={24} />
                </button>

            </div>
        </div>
    );
}