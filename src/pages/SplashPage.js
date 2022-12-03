import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ThemeProvider from '../context/settings/Theme/ThemeContext';

function SplashPage() {
  return (
    <ThemeProvider>
      <Nav />
      <Footer />
    </ThemeProvider>
  );
}

export default SplashPage;