import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProgramSelection from './pages/ProgramSelection';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program-selection" element={<ProgramSelection />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
