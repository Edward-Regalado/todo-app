import React from 'react';
import Nav from '../components/Nav';
import ToDo from '../components/Todo';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
        <Nav />
        <ToDo />
        <Footer />
    </>
  );
}

export default HomePage;