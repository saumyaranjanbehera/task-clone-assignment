import React from 'react'
import Card from './component/Card';
const images = [
    {
        src: '/card1.png', 
        alt: 'Image 1',
        link: 'https://dribbble.com/shots/20309020-Home-app-product-page',
    },
    {
        src: '/card2.png',
        alt: 'Image 2',
        link: 'https://dribbble.com/shots/20181677-Host-web-home-page-interaction',
    },
    {
        src: '/card3.png',
        alt: 'Image 3',
        link: 'https://dribbble.com/shots/20076776-Crypto-trading-home-page',
    },
    {
        src: '/card4.png',
        alt: 'Image 4',
        link: 'https://dribbble.com/shots/18726580-Mediatool-home-page-interaction',
    },
];

const CardOne = () => {
    return (
        <div className="container mx-auto mt-4 p-12">
            <div className='items-center justify-between flex m-3 p-4'>
                <h1 className="text-base md:text-xl font-semibold mb-4">More by Taras Migulko</h1>
                <p>View Profile</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <Card key={index} images={[image]} />
                ))}
            </div>
        </div>
    )
}

export default CardOne