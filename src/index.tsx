import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import App from './components/App/App';
import Create from './components/Create/Create';
import Order from './components/Order/Order';
import Salads from './components/Salads/Salads';
import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/salads" element={<Salads />} />
          <Route path="/create" element={<Create />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
