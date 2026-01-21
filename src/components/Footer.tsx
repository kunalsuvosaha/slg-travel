import { Phone, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import mapImg from '../assets/map_placeholder.jpg';

const Footer = () => {
    return (
        <footer className="bg-[#001D4A] text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">

                {/* Top Row: Logos & Map */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-b border-white/10 pb-12">
                    <div className="bg-white p-4 rounded-lg flex items-center justify-center min-h-[100px]">
                        {/* Blank White Placeholder 1 */}
                    </div>
                    <div className="bg-white p-4 rounded-lg flex items-center justify-center min-h-[100px]">
                        {/* Blank White Placeholder 2 */}
                    </div>
                    <div className="rounded-lg overflow-hidden h-32 md:h-auto">
                        <img src={mapImg} alt="Location Map" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Middle Row: Links & Contact */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    {/* Column 1: Brand */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4"><span className="text-secondary">Siliguri</span> Travels</h2>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            Siliguri Travels offers expert-guided tours to iconic and offbeat destinations. With 16 years of experience, we provide seamless bookings and personalized travel experiences.
                        </p>
                        <button className="bg-secondary hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
                            Start Your Journey
                        </button>
                    </div>

                    {/* Column 2: Explore Packages */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Explore Packages</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><a href="#" className="hover:text-secondary transition-colors">&gt; Travel in Northbengal</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">&gt; Travel in Darjeeling</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">&gt; Travel in Sikkim</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">&gt; Travel in Dooars</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">&gt; Travel in Nepal</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">&gt; Travel in Bhutan</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><a href="#" className="hover:text-secondary transition-colors">&gt; Home</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">&gt; About Us</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">&gt; Tour Package</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">&gt; Why Us</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">&gt; Testimonial</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">&gt; Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-white mt-1" />
                                <span>+91 9088500500 / 9088500500</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs p-3">WA</div>
                                <span>+91 9088500500</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-white" />
                                <span>info@siliguritravels.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-white mt-1" />
                                <span>Sister Nivedita Road, Opposite Margaret School, Siliguri WB 734003</span>
                            </li>
                            <li className="mt-4 font-bold text-white">
                                GST NO : 19CAIPD7968L1ZX
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <p>Copyright <span className="text-white font-bold">Siliguri Travels</span> - 2024 | All Rights Reserved.</p>
                    </div>

                    <div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
                        <p className="flex items-center gap-1 mb-2">Developed By <span className="text-white text-lg font-bold tracking-wider">Reboot <span className="text-secondary">AI</span></span></p>

                        <div className="flex items-center gap-3 bg-white/5 py-1 px-3 rounded-full">
                            <span className="text-gray-400">Made by <span className="text-white font-medium">Kunal</span></span>
                            <div className="flex gap-2">
                                <a href="https://github.com/kunalsuvosaha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    <Github size={14} />
                                </a>
                                <a href="https://www.linkedin.com/in/kunalsaha07/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors">
                                    <Linkedin size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
