import { useContext } from 'react';
import { GlobalStyle } from './Global.styled';
import { UserContext } from './context/UserContext';
import UserNavigation from './Navigation/UserNavigation';
import AdminNavigation from './Navigation/AdminNavigation';
import PublicNavigation from './Navigation/PublicNavigation';

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="app">
      <GlobalStyle />
      {!user && <PublicNavigation />}
      {user && user.role === 'admin' && <AdminNavigation />}
      {user && user.role === 'user' && <UserNavigation />}
    </div>
  );
};

export default App;
