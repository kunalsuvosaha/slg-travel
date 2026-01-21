
import darjeelingImg from '../assets/package_darjeeling.jpg';
import sikkimImg from '../assets/package_sikkim.jpg';
import silkRouteImg from '../assets/package_silk_route.jpg';
import kalimpongImg from '../assets/package_kalimpong.jpg';

const packages = [
    { id: 1, name: 'Darjeeling', image: darjeelingImg },
    { id: 2, name: 'Sikkim', image: sikkimImg },
    { id: 3, name: 'Silk Route', image: silkRouteImg },
    { id: 4, name: 'Kalimpong', image: kalimpongImg },
];

const TourPackages = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    <span className="text-primary">Explore Top</span> <span className="text-dark font-normal border-b-2 border-transparent">Tour Packages</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {packages.map((pkg) => (
                        <div key={pkg.id} className="relative group overflow-hidden rounded-lg aspect-[4/5] cursor-pointer">
                            <img
                                src={pkg.image}
                                alt={pkg.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-4 left-4">
                                <h3 className="text-white text-xl font-medium tracking-wide">{pkg.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TourPackages;
