import React, { useState } from "react";

export default function Photo3() {
    return (
        <div>
            <div className="relative w-full h-180 mt-0 overflow-hidden">
                <div className="w-full h-full relative">
                    <img
                        src={'https://static.vecteezy.com/system/resources/thumbnails/019/608/689/original/beautiful-orchid-flower-blooming-at-rainy-season-phalaenopsis-orchid-4k-video.jpg'}
                        className="w-full h-full object-cover"
                        alt="Farmer Banner"
                    />
                </div>
            </div>
        </div>
    );
}