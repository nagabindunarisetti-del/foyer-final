import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import CategoryNavbar from './CategoryNavbar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  
  const hideNavbarRoutes = ['/login', '/signup'];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);
  const showFooter = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
       {showNavbar && <CategoryNavbar />}
      <main>
        <Outlet />
      </main>
      {showFooter && <Footer />}
    </>
  );
};

export default Layout;