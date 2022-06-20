import React from 'react';
import RouterApp from './Router';
import Global from 'Style/Global';
import './Style/CSS/font.css';
import './Style/CSS/scrollbar.css';
import Provider from 'Provider';

const App: React.FC = () => {
  return (
    <Provider>
      <RouterApp />
      <Global />
    </Provider>
  );
};

export default App;
