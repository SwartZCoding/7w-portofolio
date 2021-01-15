import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Stack from './components/Stack';
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Stack />
      <Footer />
    </div>
  );
}

export default App;
