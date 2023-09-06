import "./Navbar.css";
import Logo from "../../assets/logo.svg";
import HomeSVG from "../../assets/icon-nav-home.svg";
import MovieSVG from "../../assets/icon-nav-movies.svg";
import TVSeriesSVG from "../../assets/icon-nav-tv-series.svg";
import BookmarkSVG from "../../assets/icon-nav-bookmark.svg";
import ImageAvatar from "../../assets/image-avatar.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  {
    route: "/home",
    title: "Home",
    icon: <HomeSVG />,
  },
  {
    route: "/movies",
    title: "Movies",
    icon: <MovieSVG />,
  },
  {
    route: "/tv-series",
    title: "TV Series",
    icon: <TVSeriesSVG />,
  },
  {
    route: "/bookmarks",
    title: "Bookmarks",
    icon: <BookmarkSVG />,
  },
] as const;

const Navbar = () => {
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState(location.pathname);

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location.pathname]);

  return (
    <div className="banner-wrapper">
      <header className="header bg-semi-dark">
        <Link to="/home" aria-label="Entertainment company">
          <Logo />
        </Link>
        <nav>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.title}>
                <Link to={item.route} title={item.title}>
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link to="" title="Avatar">
          <img
            src={ImageAvatar}
            width={40}
            height={40}
            className="your avatar"
            alt="avatar"
          />
        </Link>
      </header>
    </div>
  );
};

export default Navbar;
