import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './components/App/App';
import Create from './components/Create/Create';
import Order from './components/Order/Order';
import { store } from './store/store';
import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/create" element={<Create />} />
            <Route path="/order" element={<Order />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
