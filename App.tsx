import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Location from './components/Location';
import Residences from './components/Residences';
import Architecture from './components/Architecture';
import Investment from './components/Investment';
import Timeline from './components/Timeline';
import VideoSection from './components/VideoSection';
import RegisterCTA from './components/RegisterCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden bg-primary selection:bg-gold selection:text-white">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Location />
        <Residences />
        <Architecture />
        <Investment />
        <Timeline />
        <VideoSection />
        <RegisterCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;