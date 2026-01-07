import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProgramSelection from './pages/ProgramSelection';
import ContactModal from './components/ContactModal';
import { ModalProvider } from './context/ModalContext';
import './styles/main.css';

import About from './pages/About';

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <Navbar />
        <ContactModal />
        <main style={{ paddingTop: '100px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/program-selection" element={<ProgramSelection />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ModalProvider>
  );
}

export default App;
