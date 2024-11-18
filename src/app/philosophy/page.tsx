import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Image from 'next/image';

const PhilosophyPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#383838] text-[#000000] min-h-screen py-10 px-5">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-[#F4F4F3]">
            Design Principles of ArchiTect
          </h1>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <Image
                src="/images/design-principles.jpg" // Ensure the path is correct and the image is available in the public directory.
                alt="Architectural Design"
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="flex-1 text-[#F4F4F3]">
              <h2 className="text-3xl font-semibold mb-4">Our Approach to Luxury Design</h2>
              <p className="mb-4">
                At ArchiTect, we abide by essential design principles that inspire the creation of distinctive luxury homes.
                Our work is defined by an unwavering commitment to aesthetic excellence, sustainability, and functionality.
              </p>
              <p className="mb-4">
                Our modern architectural strategies meld innovation with elegance, ensuring each project is both beautiful and practical.
                With a focus on bespoke solutions, we tailor each design to capture the unique essence of your vision.
              </p>
              <button className="bg-[#EC5C39] text-[#FFFFFF] px-6 py-3 mt-4 inline-block text-center rounded-md font-medium">
                Discover More
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PhilosophyPage;