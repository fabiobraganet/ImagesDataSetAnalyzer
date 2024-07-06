// src/routers/index.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Operation from '@/pages/Operation';
import Error401 from '@/pages/Error/Error401';
import Error403 from '@/pages/Error/Error403';
import Error404 from '@/pages/Error/Error404';
import Home from '@/pages/Home/Index';

const Routers: React.FC = () => (
  <Routes>
    <Route path="/401" element={<Error401 />} />
    <Route path="/403" element={<Error403 />} />
    <Route path="*" element={<Error404 />} />
    <Route element={<PrivateRoute roles={[]} />}>
      <Route path="/" element={<Home />} />
    </Route>
    <Route element={<PrivateRoute roles={[]} />}>
      <Route path="/operation" element={<Operation />} />
    </Route>
  </Routes>
);

export default Routers;
