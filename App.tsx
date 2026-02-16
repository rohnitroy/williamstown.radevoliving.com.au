import React from 'react';
import ResponsiveView from './components/ResponsiveView';

// Desktop imports
import DesktopHeader from './components/desktop/Header';
import DesktopHero from './components/desktop/Hero';
import DesktopIntro from './components/desktop/Intro';
import DesktopLocation from './components/desktop/Location';
import DesktopResidences from './components/desktop/Residences';
import DesktopArchitecture from './components/desktop/Architecture';
import DesktopInvestment from './components/desktop/Investment';
import DesktopTimeline from './components/desktop/Timeline';
import DesktopVideoSection from './components/desktop/VideoSection';
import DesktopRegisterCTA from './components/desktop/RegisterCTA';
import DesktopFooter from './components/desktop/Footer';

// Mobile imports
import MobileHeader from './components/mobile/Header';
import MobileHero from './components/mobile/Hero';
import MobileIntro from './components/mobile/Intro';
import MobileLocation from './components/mobile/Location';
import MobileResidences from './components/mobile/Residences';
import MobileArchitecture from './components/mobile/Architecture';
import MobileInvestment from './components/mobile/Investment';
import MobileTimeline from './components/mobile/Timeline';
import MobileVideoSection from './components/mobile/VideoSection';
import MobileRegisterCTA from './components/mobile/RegisterCTA';
import MobileFooter from './components/mobile/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden bg-primary selection:bg-gold selection:text-white">
      <ResponsiveView
        desktop={<DesktopHeader />}
        mobile={<MobileHeader />}
      />
      <main>
        <ResponsiveView
          desktop={<DesktopHero />}
          mobile={<MobileHero />}
        />
        <ResponsiveView
          desktop={<DesktopIntro />}
          mobile={<MobileIntro />}
        />
        <ResponsiveView
          desktop={<DesktopLocation />}
          mobile={<MobileLocation />}
        />
        <ResponsiveView
          desktop={<DesktopResidences />}
          mobile={<MobileResidences />}
        />
        <ResponsiveView
          desktop={<DesktopArchitecture />}
          mobile={<MobileArchitecture />}
        />
        <ResponsiveView
          desktop={<DesktopInvestment />}
          mobile={<MobileInvestment />}
        />
        <ResponsiveView
          desktop={<DesktopTimeline />}
          mobile={<MobileTimeline />}
        />
        <ResponsiveView
          desktop={<DesktopVideoSection />}
          mobile={<MobileVideoSection />}
        />
        <ResponsiveView
          desktop={<DesktopRegisterCTA />}
          mobile={<MobileRegisterCTA />}
        />
      </main>
      <ResponsiveView
        desktop={<DesktopFooter />}
        mobile={<MobileFooter />}
      />
    </div>
  );
};

export default App;
