import Navbar from "../Navbar/Navbar";
import SearchBox from "../SearchBox/SearchBox";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import { useState } from "react";

const MainLayout = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="main-layout">
      <Navbar />
      <div className="inner-content">
        <SearchBox search={[searchValue, setSearchValue]} />
        <Outlet context={[searchValue, setSearchValue]} />
      </div>
    </div>
  );
};

export default MainLayout;
