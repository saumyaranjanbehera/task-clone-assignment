import React from 'react';
import Link from 'next/link';
import { BsTwitter } from 'react-icons/bs';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';

const Footerone = () => {
  return (
    <div className='flex flex-col md:flex-row p-4 md:p-7 gap-4 md:gap-60 items-center justify-evenly'>
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-black text-xl font-semibold hover:text-gray-600">
          Dribble
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-center space-x-4 md:space-x-8 lg:space-x-4">
        <Link href="/" className="text-black hover:text-gray-600">
          For Designers
        </Link>
        <Link href="/" className="text-black hover:text-gray-600">
          Hire talent
        </Link>
        <Link href="/" className="text-black hover:text-gray-600">
          Inspiration
        </Link>
        <Link href="/" className="text-black hover:text-gray-600">
          Advertising
        </Link>
        <Link href="/" className="text-black hover:text-gray-600">
          Blog
        </Link>
        <Link href="/" className="text-black hover:text-gray-600">
          About
        </Link>
        <Link href="/" className="text-black hover:text-gray-600">
          Careers
        </Link>
        <Link href="/" className="text-black hover:text-gray-600">
          Support
        </Link>
      </div>
      <div className="flex items-center space-x-4 md:space-x-8 lg:space-x-6 text-xl hover:text-gray-500">
        <BsTwitter />
        <BiLogoFacebookSquare />
        <AiOutlineInstagram />
        <BsPinterest />
      </div>
    </div>
  );
};

export default Footerone;
