import bgImage from '../assets/contact_kanchenjunga.jpg';

const Contact = () => {
    return (
        <section className="relative py-24 flex items-center justify-center min-h-[600px]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img src={bgImage} alt="Kanchenjunga Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Form Container - Top Curved Shape simulated with CSS or just rounded container as per screenshot */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4">

                {/* Curvy Top Container Mask simulation if needed, but standard container fits well */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">Get in Touch for Your Custom Tour Inquiry!</h2>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <input type="text" placeholder="Name" className="bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-6 py-4 text-white placeholder-gray-200 focus:outline-none focus:border-secondary transition-all" />
                        <input type="tel" placeholder="Mobile Number" className="bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-6 py-4 text-white placeholder-gray-200 focus:outline-none focus:border-secondary transition-all" />
                        <input type="email" placeholder="Email" className="bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-6 py-4 text-white placeholder-gray-200 focus:outline-none focus:border-secondary transition-all" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <input type="text" placeholder="Select Destination" className="bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-6 py-4 text-white placeholder-gray-200 focus:outline-none focus:border-secondary transition-all" />
                        <input type="date" placeholder="To Date" className="bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-6 py-4 text-white placeholder-gray-200 focus:outline-none focus:border-secondary transition-all" />
                        <input type="date" placeholder="From Date" className="bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-6 py-4 text-white placeholder-gray-200 focus:outline-none focus:border-secondary transition-all" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 items-center">
                        <input type="text" placeholder="Message" className="w-full bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-6 py-4 text-white placeholder-gray-200 focus:outline-none focus:border-secondary transition-all" />

                        <button type="submit" className="w-full bg-secondary hover:bg-orange-600 text-white font-bold py-4 rounded-full shadow-lg transition-colors text-lg">
                            Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
