import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme';
import Analytics from './components/analytics';
import DataDescription from './components/dataDescription';
import React from 'react';
import Display from './components/display';

const { default: Cover } = require('./components/cover');

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Cover />
      <DataDescription />
      <Analytics />
      <Display />
    </ThemeProvider>
  );
}

export default App;
