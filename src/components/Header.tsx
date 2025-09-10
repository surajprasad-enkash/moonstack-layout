import React, { useState } from 'react';
import logo from '../../public/assets/logo-white.png'
import Image from 'next/image';
import { Colors } from '@/colors/colors';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const menuItems = [
        { id: 1, paths: ["/"], title: "Home" },
        { id: 2, paths: ["/services"], title: "Services" },
        { id: 3, paths: ["/about-us"], title: "About Us" },
        { id: 4, paths: ["/contact-us"], title: "Contact Us" },
        { id: 5, paths: ["/career"], title: "Career" },
    ];

    return (
        <>
            <header className="bg-black text-white p-4 flex justify-between items-center">
                <div className="w-40">
                    <Image src={logo} alt='logo' className="h-auto w-auto object-contain" />
                </div>

                <nav className="flex items-center space-x-10">
                    {menuItems.map((item, index) => {
                        const isActive = item.paths.includes('/');
                        return (
                            <div
                                key={index}
                                className={`block ml-3 py-2 flex justify-between items-center text-white cursor-pointer poppins-medium font-14`}
                                style={{ color: isActive && Colors.brand200 }}
                            >
                                {item.title}
                            </div>
                        );
                    })}
                </nav>

                <div>
                    <button className="talk-btn" style={{ backgroundColor: Colors.brand400 }}>
                        <span className='text-black poppins-semibold font-16'>Let's Talk</span>
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;