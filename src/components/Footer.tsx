'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#383838] p-6 md:p-8 text-[#F4F4F3]">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <Link href="https://www.facebook.com" aria-label="Facebook">
            <a className="hover:text-[#EC5C39]">
              <Image
                src="/images/facebook-icon.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
          </Link>
          <Link href="https://www.twitter.com" aria-label="Twitter">
            <a className="hover:text-[#EC5C39]">
              <Image
                src="/images/twitter-icon.svg"
                alt="Twitter"
                width={24}
                height={24}
              />
            </a>
          </Link>
          <Link href="https://www.instagram.com" aria-label="Instagram">
            <a className="hover:text-[#EC5C39]">
              <Image
                src="/images/instagram-icon.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
          </Link>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-4 md:mt-0 md:text-left">
          <p className="text-[#FFFFFF]">Contact Us: contact@example.com</p>
          <p className="text-[#FFFFFF]">Phone: +1 234 567 890</p>
        </div>

        {/* Copyright Notice */}
        <div className="mt-4 md:mt-0 text-center">
          <p className="text-[#EC5C39]">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;