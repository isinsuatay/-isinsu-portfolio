'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import NavBar from './NavBarComponent';
import Stars from './AnimatedStarsComponent';
import SocialMedia from './SocialMediaComponent';
import AnimatedCursor from './AnimatedCursor'; 

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`}>
      <AnimatedCursor /> 
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <Stars />
      <main>
        {children}
      </main>
      <SocialMedia />
    </div>
  );
};

export default Layout;