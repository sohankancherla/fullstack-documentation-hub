import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BackendPage from './BackendPage';
import Python from '../Backend/Python/Python';

function Backend() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BackendPage/>} />
        <Route path="python/*" element={<Python/>} />
      </Routes>
    </div>
  );
}

export default Backend;
