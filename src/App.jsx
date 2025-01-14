import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './sub_pages/home';
import ChemistryResourcesPage from './sub_pages/chem.jsx';
import PhysicsResourcesPage from './sub_pages/phy.jsx';
import MathsResourcesPage from './sub_pages/maths.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/chemistry" element={<ChemistryResourcesPage/>} />
        <Route path="/physics" element={<PhysicsResourcesPage/>} />
        <Route path="/mathematics" element={<MathsResourcesPage/>} />
      </Routes>
    </Router>
  );
}

export default App;