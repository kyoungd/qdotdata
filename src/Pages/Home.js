// Components
import React from 'react';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import Services from '../Components/Services';
import About from '../Components/About';
import About2 from '../Components/About2'
import Available from '../Components/Available';
import Blog from '../Components/Blog';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
// import Portfolio from '../Components/Portfolio';
// import Resume from '../Components/Resume';
// import Pricing from '../Components/Pricing';
// import Brands from '../Components/Brands';
// import Testimonial from '../Components/Testimonial';
import AiWidget from '../Components/AiWidget';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Services />
            {/* <Portfolio /> */}
            <About />
            <About2 />
            {/* <Resume />
            <Pricing />
            <Brands />
            <Testimonial /> */}
            <Available />
            <Blog />
            <Contact />
            <Footer />
            <AiWidget />
        </div>
    );
};

export default Home;