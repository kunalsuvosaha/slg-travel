import img from '../assets/why_us_bhutan.jpg';

const features = [
    { id: '01', title: '16 Years of Experience', desc: 'We bring over a decade of expertise in crafting unforgettable tours and handling all aspects of your trip.' },
    { id: '02', title: 'Tailored Itineraries', desc: 'We customize your travel experiences, from popular hotspots to offbeat destinations, ensuring a unique and personalized journey.' },
    { id: '03', title: 'Comprehensive Travel Services', desc: 'We offer seamless booking for cars, hotels, and flights, making your entire travel experience smooth and hassle-free.' },
    { id: '04', title: 'Expert Local Knowledge', desc: 'Our deep understanding of regional destinations ensures you explore hidden gems and iconic spots with insider knowledge.' },
    { id: '05', title: 'Customer Satisfaction Focused', desc: 'Our top priority is your satisfaction, offering flexibility, convenience, and exceptional service at every step of your journey.' },
];

const WhyUs = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">
                        <h4 className="text-primary font-medium mb-2">Why Choose Planmytrip?</h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-10 leading-tight">
                            Why Choose <span className="text-primary">Siliguri Travels</span> for Your Journey?
                        </h2>

                        <div className="space-y-8">
                            {features.map((feature) => (
                                <div key={feature.id} className="flex gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-lg shadow-orange-200">
                                            <span className="text-white font-bold text-xl">{feature.id}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="rounded-3xl overflow-hidden shadow-xl h-[600px] w-full">
                            <img src={img} alt="Bhutan Dzong" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
