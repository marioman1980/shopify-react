import { Outlet } from "react-router-dom";
import './Base.css';

const Layout = () => {
  return (
    <>
      {/* <Navigation /> */}

      <Outlet />
    </>
  )
};

export default Layout;