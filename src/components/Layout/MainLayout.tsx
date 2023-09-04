import Navbar from "../Navbar/Navbar";
import SearchBox from "../SearchBox/SearchBox";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import { Suspense, useState } from "react";

const MainLayout = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="primary-layout">
      <header>
        <Navbar />
      </header>
      <main className="main-content">
        <SearchBox search={[searchValue, setSearchValue]} />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet context={[searchValue, setSearchValue]} />
        </Suspense>
      </main>
    </div>
  );
};

export default MainLayout;
