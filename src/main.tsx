import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './context/UserContext.tsx';
import { BooksProvider } from './context/BookContext.tsx';
import ErrorProvider from './context/ErrorContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorProvider>
        <UserProvider>
          <BooksProvider>
            <App />
          </BooksProvider>
        </UserProvider>
      </ErrorProvider>
    </BrowserRouter>
  </React.StrictMode>
);
