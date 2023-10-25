import React from 'react';
import { IoMdMail } from 'react-icons/io'

const Profile = () => {
    return (
        <div className='items-center justify-between'>
            <div className='p-1 flex items-center'>
                <div className='flex-1 border-t border-gray-400'></div> {/* Left horizontal line */}
                <div className='items-center justify-center'>
                    <img src='/profile.jpg' className='w-[72px] h-[72px] rounded-full' alt='Profile Picture' />
                </div>
                <div className='flex-1 border-t border-gray-400'></div> {/* Right horizontal line */}

            </div>
            <div className='text-center ml-2'>
                <a href='https://dribbble.com/ui_migulko' className='text-xl font-medium'>Taras Migulko</a>
                <p className='p-1 text-base'>Email me hey@migulko.cz</p>
                <div className='p-1 flex items-center justify-center'>
                    <button className='px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 bg-black text-white rounded-3xl items-center justify-center flex'>
                        <IoMdMail className='flex mr-2' />
                        Work with me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
