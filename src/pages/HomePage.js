import React from 'react';
import Nav from '../components/Nav';
import ToDo from '../components/Todo';
import Footer from '../components/Footer';
import ThemeProvider from '../context/settings/Theme/ThemeContext';

function HomePage() {
  return (
    <ThemeProvider>
        <Nav />
        <ToDo />
        <Footer />
    </ThemeProvider>
  );
}

export default HomePage;