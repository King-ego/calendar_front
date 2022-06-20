import React from 'react';
import RouterApp from './Router';
import Global from 'Style/Global';
import Provider from 'Provider';

import 'Style/CSS/index.css';

const App: React.FC = () => {
  return (
    <Provider>
      <RouterApp />
      <Global />
    </Provider>
  );
};

export default App;
