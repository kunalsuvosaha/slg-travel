import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TourPackages from './components/TourPackages'
import About from './components/About'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileNav from './components/MobileNav'

function App() {
    return (
        <div className="min-h-screen bg-white font-sans text-dark pb-24 md:pb-0">
            <Navbar />
            <Hero />
            <TourPackages />
            <About />
            <WhyUs />
            <Testimonials />
            <Contact />
            <Footer />
            <MobileNav />
        </div>
    )
}

export default App
