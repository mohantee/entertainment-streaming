import Navbar from "../Navbar/Navbar";
import SearchBox from "../SearchBox/SearchBox";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <SearchBox />
      <Outlet />
    </div>
  );
};

export default MainLayout;
