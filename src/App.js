import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import CodeConnu from './pages/CodeConnu';
import Cv from './pages/Cv';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/CodeConnu" element={<CodeConnu />} />
        <Route path="/Cv" element={<Cv />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;