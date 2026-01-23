import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './styles/main.css';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ paddingTop: '100px' }}>
        <Home />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;
