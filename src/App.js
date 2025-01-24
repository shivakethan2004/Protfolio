import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Practice from './components/Matter';
import FallingDiv from './components/NavBarContentSmall';
import NavBar from './components/NavBarContentSmall';
import { ReactLenis } from '@studio-freight/react-lenis';
import Works from './components/Works';

function App() {
  return (
    <ReactLenis root>
      <Router>
        <div className="App">
          {/* Navigation Bar */}
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/" element={<Practice />} />
            <Route path="/WORKS" element={<Works />} />
          </Routes>
        </div>
      </Router>
    </ReactLenis>
  );
}

export default App;
