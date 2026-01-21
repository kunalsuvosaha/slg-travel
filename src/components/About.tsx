
import elephantImg from '../assets/about_elephant.jpg';
import nature1 from '../assets/about_nature_1.jpg';
import nature2 from '../assets/about_nature_2.jpg';
// Reusing package images for the circular grid to save generation time/consistency
import nature3 from '../assets/package_darjeeling.jpg';
import nature4 from '../assets/package_sikkim.jpg';
import { Check } from 'lucide-react';

const About = () => {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    {/* Left Side - Image Composition */}
                    <div className="w-full lg:w-1/2 relative space-y-6">
                        {/* Main Elephant Image */}
                        <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
                            <img src={elephantImg} alt="Elephants in the wild" className="w-full h-full object-cover" />
                        </div>

                        {/* Circular Images Row - Negative Margin to overlap or just below */}
                        <div className="flex justify-between md:justify-start md:space-x-4 mt-6">
                            {[nature1, nature2, nature3, nature4].map((img, idx) => (
                                <div key={idx} className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-md z-10 relative">
                                    <img src={img} alt={`Nature ${idx}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="w-full lg:w-1/2 pt-4">
                        <h4 className="text-primary font-medium mb-2">About Planmytrip</h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">
                            Explore Offbeat and Popular Destinations with <span className="text-secondary">Siliguri Travels</span>
                        </h2>

                        <p className="text-gray-600 mb-8 leading-relaxed text-justify">
                            Siliguri Travels offers a wide array of travel experiences, catering to both mainstream and offbeat destinations. Whether you're seeking a serene getaway in the Eastern Himalayas or an adventurous trip through North East India, our meticulously curated tour packages ensure an unforgettable journey. From popular destinations like Darjeeling, Assam, and Bhutan to hidden gems such as Lamahatta, Tinchule, and Munthum Valley, we specialize in providing tailored experiences.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Tailored itineraries for unique, offbeat experiences.",
                                "Comprehensive travel services: booking, car, hotel, flights.",
                                "Expertise in both popular and hidden destinations.",
                                "Flexible tour durations for diverse travel preferences."
                            ].map((item, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <div className="mt-1">
                                        <Check size={20} className="text-primary" strokeWidth={3} />
                                    </div>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
