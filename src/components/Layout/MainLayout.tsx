import Navbar from "../Navbar/Navbar";
import SearchBox from "../SearchBox/SearchBox";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import { Suspense, useState } from "react";
import Loader from "../Loader/Loader";

const MainLayout = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <SearchBox search={[searchValue, setSearchValue]} />
        <Suspense fallback={<Loader />}>
          <Outlet context={[searchValue, setSearchValue]} />
        </Suspense>
      </main>
    </div>
  );
};

export default MainLayout;
