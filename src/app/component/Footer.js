import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="m-6 flex flex-col sm:flex-row sm:justify-between items-center">
            <div className="container flex gap-2 text-gray-500 text-center sm:text-left">
                &copy; 2023 | Dribble
                <Link href="/" className="text-gray">
                    Terms
                </Link>
                <Link href="/" className="text-gray">
                    Privacy
                </Link>
                <Link href="/" className="text-gray">
                    Cookies
                </Link>
            </div>
            <div className="flex flex-wrap lg:inline-block items-center justify-center gap-2 md:space-x-4 lg:space-x-6">
                <Link href="/" className="text-gray">
                    Jobs
                </Link>
                <Link href="/" className="text-gray">
                    Designers
                </Link>
                <Link href="/" className="text-gray">
                    Freelancer
                </Link>
                <Link href="/" className="text-gray">
                    Tags
                </Link>
                <Link href="/" className="text-gray">
                    Place
                </Link>
                <Link href="/" className="text-gray">
                    Resources
                </Link>
            </div>
        </div>
    );
};

export default Footer;
