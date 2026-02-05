'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {

  return (
    <footer className="bg-[#002a25] text-white px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo/logo.png" 
            alt="Logo" 
            className="h-auto w-32"
            width={100}
            height={100}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
