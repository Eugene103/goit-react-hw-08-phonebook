import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/App/GlobalStyle';
import { App } from 'components/App/App';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={{}} >
        <BrowserRouter basename='goit-react-hw-08-phonebook'>
      <PersistGate loading={null} persistor={persistor}>
      <App/>
      <GlobalStyle/>
        </PersistGate>
        </BrowserRouter>
    </ThemeProvider>
      </Provider>
  </React.StrictMode>
);
