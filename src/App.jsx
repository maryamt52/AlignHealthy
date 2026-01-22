import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ paddingTop: '100px' }}>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
