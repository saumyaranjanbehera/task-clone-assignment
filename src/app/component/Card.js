

import React from 'react';

const Card = ({ images }) => {
    if (!images || !Array.isArray(images) || images.length === 0) {
        return null;
    }

    return (
        <div className=" shadow-sm rounded-lg overflow-hidden">

            {images.map((image, index) => (
                <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
                    <div key={index} className="w-full m-5 p-4 h-40 md:h-56 relative">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Card;
