import React from 'react';
import { Routes, Route } from 'react-router-dom';

interface PageRouteProps {
  location: string;
}

const PageRoute = ({ location }: PageRouteProps) => {
  return (
    <Routes location={location}>
      <Route path="/" element={<div />} />
    </Routes>
  );
};

export default PageRoute;
