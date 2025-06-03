import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PortfolioGrid from './components/PortfolioGrid';
import Bureau from './components/Bureau';
import ProjectDetail from './components/ProjectDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={
          <>
            <Header />
            <PortfolioGrid />
          </>
        } />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
        <Route path="/" element={<Bureau />} />
      </Routes>
    </Router>
  );
};

export default App;
