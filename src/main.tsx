import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './context/UserContext.tsx';
import { BooksProvider } from './context/BookContext.tsx';
import ErrorProvider from './context/ErrorContext.tsx';
import { InventoryProvider } from './context/InventoryContext.tsx';
import { CartProvider } from './context/CartContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ErrorProvider>
      <CartProvider>
        <UserProvider>
          <BooksProvider>
            <InventoryProvider>
              <App />
            </InventoryProvider>
          </BooksProvider>
        </UserProvider>
      </CartProvider>
    </ErrorProvider>
  </BrowserRouter>
);
