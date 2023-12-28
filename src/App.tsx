import { useContext } from 'react';
import { GlobalStyle } from './Global.styled';
import { UserContext } from './context/UserContext';
import UserNavigation from './Navigation/UserNavigation';
import AdminNavigation from './Navigation/AdminNavigation';
import PublicNavigation from './Navigation/PublicNavigation';

const App = () => {
  const { user } = useContext(UserContext);
  const isAdmin = user?.role.includes('ADMIN');

  return (
    <div className="app">
      <GlobalStyle />
      {!user && <PublicNavigation />}
      {user && isAdmin && <AdminNavigation />}
      {user && !isAdmin && <UserNavigation />}
    </div>
  );
};

export default App;
