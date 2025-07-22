import React, { useState } from "react";

export default function ImagePhoto() {
    return (
        <div>
            <div className="relative w-full h-80 mt-0 overflow-hidden">
                <div className="w-full h-full relative">
                    <img
                        src={'https://lonquenchile.cl/wp-content/uploads/2024/09/Banner-lonquen-interiores-Contactanos.jpg'}
                        className="w-full h-full object-cover"
                        alt="Orchids Banner"
                    />

                    <div className="absolute bottom-32 left-10 text-white text-5xl font-bold px-8 py-6 ">
                        Our Orchids
                    </div>
                </div>
            </div>
        </div>
    );
}