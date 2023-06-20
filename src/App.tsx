import React from 'react';
import { HeaderContainer } from 'containers';
import './App.css';

const App = () => {
  return (
    <div>
      <React.Suspense fallback={<>..</>}>
        <HeaderContainer />
      </React.Suspense>
    </div>
  );
};

export default App;
