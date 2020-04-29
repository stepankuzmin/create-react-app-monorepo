import React from 'react';
import { Button, theme, configureRootTheme } from '@example/ui';

import logo from './logo.svg';
import './App.css';

configureRootTheme({ theme });

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Button view='default' size='m'>
          Hello Button
        </Button>
      </header>
    </div>
  );
}

export default App;
