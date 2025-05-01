import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Stats from '../components/Stats';
import Dashboard from '../components/Dashboard';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Process />
      <Dashboard />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
