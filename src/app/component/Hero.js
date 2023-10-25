import React from 'react';

const Hero = () => {
    return (
        <div className="p-4 md:p-20 lg:p-32"> 
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center">
                    <img src="/profile.jpg" className="w-12 h-12 md:w-16 md:h-16 rounded-full" alt="Profile"/>
                    <div className="mt-4 md:mt-0 md:ml-3"> 
                        <h1 className="text-xl md:text-2xl lg:text-xl font-normal">Ahead app redesign concept</h1> 
                        <a
                            href="https://dribbble.com/ui_migulko"
                            className="text-black hover:text-gray-400"
                        >
                            Taras Migulko • Follow
                        </a>
                    </div>
                </div>
                <div className="mt-4 md:mt-0 flex items-center">
                    <button className="px-4 py-2 md:px-6 md:py-3 lg:px-6 lg:py-2 bg-black text-white rounded-md hover:bg-gray-500"> 
                        Work with me
                    </button>
                </div>
            </div>
            <div className="mt-6 md:mt-10 flex justify-center">
                <video
                    src="/video.mp4"
                    preload="auto"
                    loop
                    autoPlay
                    className="w-full md:w-[75%] h-auto"
                />
            </div>
            <div className='mt-6 md:mt-10 p-6 md:p-12 lg:p-36 font-medium'> 
                <p>Hey all,</p>
                <p>
                    I've decided to make a redesign and animation for the <span><a href='https://www.ahead-app.com/' className='underline'>Ahead</a></span> app. Please review and happy to read your feedback!
                </p>
                <p>Design — Figma</p>
                <p>Illustrations — Adobe Illustrator</p>
                <p>Animation — Adobe After Effects</p>
                <p>************</p>
                <p>💌 I am open to new projects! hey@migulko.cz</p>
                <p>************</p>
                <p>
                    <a className='underline'>Instagram</a> |
                    <a className='underline'>Linkedln</a> |
                    <a className='underline'>UI8</a>
                </p>
            </div>
            <div className='flex items-center justify-center mt-6 md:mt-10'> 
                <img src='/image.jpg' className="w-full md:w-auto" />
            </div>
        </div>
    );
};

export default Hero;
