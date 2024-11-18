import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full bg-[#383838] text-[#000000] flex flex-col justify-center items-center">
          <div className="relative w-full h-[70vh]">
            <Image
              src="/image-home-hero-section.jpg"
              alt="Hero"
              layout="fill"
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="mb-8"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-[#000000]">
                Welcome to ArchiTect
              </h1>
              <p className="mt-4 text-lg text-[#F4F4F3]">
                Transforming spaces with cutting-edge architectural design.
              </p>
              <Link href="/portfolio">
                <button className="bg-[#F4F4F3] text-[#EC5C39] px-4 py-2 rounded font-semibold hover:bg-[#EC5C39] hover:text-[#FFFFFF]">
                  Explore Our Projects
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="w-full bg-[#F4F4F3] text-[#000000] py-16 px-8">
          <div className="max-w-screen-lg mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Discover the Art of Architecture
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              At ArchiTect, we believe in blending art with functionality. Our
              innovative designs are a testament to our commitment to excellence
              and sophistication.
            </p>
            <Link href="/about">
              <button className="bg-[#EC5C39] text-[#FFFFFF] px-4 py-2 rounded font-semibold hover:bg-[#383838]">
                Learn More About Us
              </button>
            </Link>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="w-full bg-[#383838] text-[#FFFFFF] py-16 px-8">
          <div className="max-w-screen-lg mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Featured Projects
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              Browse some of our most exceptional architectural projects that
              redefine modern living.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-[#F4F4F3] p-4 rounded shadow-lg">
                <Image
                  src="/project1.jpg"
                  alt="Project 1"
                  width={300}
                  height={200}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold text-[#000000] mb-2">
                  Luxurious Villa
                </h3>
                <p className="text-[#383838]">
                  A stunning blend of luxury and sustainable design.
                </p>
              </div>
              {/* Project 2 */}
              <div className="bg-[#F4F4F3] p-4 rounded shadow-lg">
                <Image
                  src="/project2.jpg"
                  alt="Project 2"
                  width={300}
                  height={200}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold text-[#000000] mb-2">
                  Urban Loft
                </h3>
                <p className="text-[#383838]">
                  Modern elegance meets urban chic in this beautiful loft.
                </p>
              </div>
              {/* Project 3 */}
              <div className="bg-[#F4F4F3] p-4 rounded shadow-lg">
                <Image
                  src="/project3.jpg"
                  alt="Project 3"
                  width={300}
                  height={200}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold text-[#000000] mb-2">
                  Office Tower
                </h3>
                <p className="text-[#383838]">
                  Innovative workspace with cutting-edge design features.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}