import React, { useState, useEffect } from 'react';

interface ResponsiveViewProps {
  desktop: React.ReactNode;
  mobile: React.ReactNode;
  breakpoint?: number;
}

const ResponsiveView: React.FC<ResponsiveViewProps> = ({ 
  desktop, 
  mobile, 
  breakpoint = 768 
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [breakpoint]);

  return <>{isMobile ? mobile : desktop}</>;
};

export default ResponsiveView;
