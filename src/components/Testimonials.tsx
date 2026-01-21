import { User, Star } from 'lucide-react';

const testimonials = [
    { id: 1, name: 'Kunal Saha', rating: 5, text: 'The Suntalekhola & Jhalong tour was an unforgettable experience! The lush forests, serene riverside, and breathtaking views were absolutely stunning. Highly recommend this peaceful retreat!', active: false },
    { id: 2, name: 'Kunal Saha', rating: 5, text: 'Lorem ipsum dolor sit amet consectetur. Interdum lorem lacus ipsum id amet lorem. Non iaculis vestibulum aliquam morbi bibendum volutpat. Nibh malesuada eget odio in ipsum ipsum.', active: true },
    { id: 3, name: 'Kunal Saha', rating: 5, text: 'Lorem ipsum dolor sit amet consectetur. Interdum lorem lacus ipsum id amet lorem. Non iaculis vestibulum aliquam morbi bibendum volutpat. Nibh malesuada eget odio in ipsum ipsum.', active: false },
];

const Testimonials = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h4 className="text-primary font-medium mb-2">Our Testimonial</h4>
                    <h2 className="text-3xl md:text-4xl font-bold text-dark">
                        Memorable Trips Shared By <span className="text-secondary">Travelers</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                        <div key={t.id} className={`p-8 rounded-xl shadow-sm border ${t.active ? 'bg-primary text-white border-primary transform scale-105 shadow-xl' : 'bg-gray-50 text-gray-800 border-gray-100'}`}>
                            <div className="flex flex-col items-start gap-4 mb-6">
                                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${t.active ? 'bg-secondary' : 'bg-secondary'}`}>
                                    <User size={30} className="text-white" />
                                </div>
                                <div>
                                    <h3 className={`font-bold text-lg ${t.active ? 'text-white' : 'text-dark'}`}>{t.name}</h3>
                                    <div className="flex space-x-1">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star key={i} size={14} fill={t.active ? "white" : "#FF6B00"} stroke="none" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className={`text-sm leading-relaxed ${t.active ? 'opacity-90' : 'text-gray-600'}`}>
                                {t.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
