import { Home, Phone, Headphones } from 'lucide-react';

const MobileNav = () => {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#1A1A1A]/90 backdrop-blur-lg border-t border-white/5 z-[60] px-4 py-3 pb-safe-area-inset-bottom">
            <div className="flex justify-between items-center max-w-sm mx-auto">
                <a href="#home" className="flex flex-col items-center group w-1/3">
                    <div className="w-14 h-9 rounded-2xl bg-white/5 flex items-center justify-center mb-1 group-hover:bg-primary/20 transition-all duration-300">
                        <Home size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-gray-400 text-[10px] font-medium tracking-wide group-hover:text-white transition-colors">Dashboard</span>
                </a>

                <a href="tel:+919088500500" className="flex flex-col items-center group w-1/3">
                    <div className="w-14 h-9 rounded-2xl bg-primary/90 flex items-center justify-center mb-1 shadow-lg shadow-orange-900/20 group-hover:bg-primary transition-all duration-300 scale-110">
                        <Phone size={20} className="text-white fill-white" />
                    </div>
                    <span className="text-white text-[10px] font-bold tracking-wide mt-0.5">Book Call</span>
                </a>

                <a href="https://wa.me/919088500500" className="flex flex-col items-center group w-1/3">
                    <div className="w-14 h-9 rounded-2xl bg-white/5 flex items-center justify-center mb-1 group-hover:bg-primary/20 transition-all duration-300">
                        <Headphones size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-gray-400 text-[10px] font-medium tracking-wide group-hover:text-white transition-colors">Support</span>
                </a>
            </div>
        </div>
    );
};

export default MobileNav;
