import MainLayout from "./components/Layout/MainLayout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useInitializeStore from "./hooks/useInitializeStore";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));
const TVSeries = lazy(() => import("./pages/TVSeries"));
const Bookmarks = lazy(() => import("./pages/Bookmarks"));

function App() {
  useInitializeStore(); // fetch shows data and add it to global state
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="tv-series" element={<TVSeries />} />
          <Route path="bookmarks" element={<Bookmarks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
