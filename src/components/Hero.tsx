import heroImage from '../assets/hero_himalayas.jpg';

const Hero = () => {
    return (
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-b-[50px] md:rounded-b-[80px] shadow-sm">
            {/* Background Image */}
            <img
                src={heroImage}
                alt="Snowy Himalayas and Lake"
                className="w-full h-full object-cover object-bottom"
            />

            {/* Optional Overlay if text needs to be readable, though design shows clean image */}
            {/* <div className="absolute inset-0 bg-black/10"></div> */}
        </div>
    );
};

export default Hero;
