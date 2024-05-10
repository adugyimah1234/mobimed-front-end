import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Aboutsection from '../components/Aboutsection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SearchBar />
      <Aboutsection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;