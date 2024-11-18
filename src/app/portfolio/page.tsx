import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

export default function Portfolio() {
    return (
        <>
            <Navbar />

            <main className="bg-secondary">
                {/* Gallery Section */}
                <section className="bg-primary text-text-secondary py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold mb-8 text-text-secondary">Our Projects</h2>
                        <p className="mb-6 text-lg">Explore our diverse portfolio showcasing the innovative designs and expert executions by ArchiTect, from initial concepts to final completion.</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="shadow-lg overflow-hidden">
                                <Image
                                    src="/image-portfolio-gallery-section.jpg"
                                    alt="Portfolio Project 1"
                                    width={400}
                                    height={300}
                                    className="w-full h-auto"
                                />
                                <div className="p-4 bg-secondary">
                                    <h3 className="text-2xl font-semibold text-text-primary">Project Overview</h3>
                                    <p className="text-text-primary">A modern design for a corporate headquarters reflecting innovative architecture and functional design.</p>
                                </div>
                            </div>
                            {/* Repeat similar blocks for additional projects */}
                        </div>

                        <div className="mt-12 text-center">
                            <Link href="/contact" className="inline-block bg-accent text-text-secondary hover:bg-opacity-80 px-6 py-3 rounded-lg text-lg font-medium transition duration-300">Get in Touch</Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}