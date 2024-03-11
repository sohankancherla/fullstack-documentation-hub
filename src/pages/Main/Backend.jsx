import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BackendPage from './BackendPage';
import Python from '../Backend/Python/Python';
import NotFound from './NotFound';
import logo from '../../assets/logo/logo-transparent.png'

const companyName = "FDH";

function Backend() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BackendPage/>} />
        <Route path="python/*" element={<Python/>} />
        <Route path="/*" element={<NotFound logo={logo} companyName={companyName} />} />
      </Routes>
    </div>
  );
}

export default Backend;
