import React from 'react';
import '../../App.css';
import Bio from '../Bio';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';

function Home() {
    return (
        <>
        <HeroSection />
        <Bio />
        <Cards />
        <Footer />
        </>
    )
}

export default Home;