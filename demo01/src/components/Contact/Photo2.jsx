import React, { useState } from "react";

export default function ImagePhoto2() {
    return (
        <div>
            <div className="relative w-full h-80 mt-0 overflow-hidden">
                <div className="w-full h-full relative">
                    <img
                        src={'https://wallpapers.com/images/hd/baby-pink-orchids-nohr0yu9macbhtbt.jpg'}
                        className="w-full h-full object-cover"
                        alt="Contact Banner"
                    />

                    <div className="absolute bottom-30 right-22 text-white text-5xl font-bold px-8 py-6 ">
                        Contact
                    </div>
                </div>
            </div>
        </div>
    );
}