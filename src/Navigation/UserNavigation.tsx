import { Route, Routes } from 'react-router-dom';
import GeneralTemplate from '../pageTemplate/GeneralTemplate';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import Book from '../pages/Book/Book';
import Cart from '../pages/Cart/Cart';
import NoRoute from '../pages/NoRoute';
import MyOrders from '../pages/MyOrders/MyOrders';

const UserNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<GeneralTemplate />}>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/myOrders" element={<MyOrders />} />
        <Route path="book/:bookId" element={<Book />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="*" element={<NoRoute />} />
    </Routes>
  );
};

export default UserNavigation;
