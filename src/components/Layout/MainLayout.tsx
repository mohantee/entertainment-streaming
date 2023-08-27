import Navbar from "../Navbar/Navbar";
import SearchBox from "../SearchBox/SearchBox";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="inner-content">
        <SearchBox />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
