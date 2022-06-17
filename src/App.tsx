import React from 'react';
import RouterApp from './Router';
import Global from 'Style/Global';
import './Style/CSS/font.css';

const App: React.FC = () => {
  return (
    <>
      <RouterApp />
      <Global />
    </>
  );
};

export default App;
