import "./Navbar.css";
import Logo from "../../assets/logo.svg";
import HomeSVG from "../../assets/icon-nav-home.svg";
import MovieSVG from "../../assets/icon-nav-movies.svg";
import TVSeriesSVG from "../../assets/icon-nav-tv-series.svg";
import BookmarkSVG from "../../assets/icon-nav-bookmark.svg";
import ImageAvatar from "../../assets/image-avatar.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState(location.pathname);

  const NAV_ITEMS = [
    {
      route: "/home",
      title: "Home",
      icon: <HomeSVG className="nav-icon" />,
      get isCurrent() {
        return this.route === currentLocation ? "page" : "false";
      },
    },
    {
      route: "/movies",
      title: "Movies",
      icon: <MovieSVG className="nav-icon" />,
      get isCurrent() {
        return this.route === currentLocation ? "page" : "false";
      },
    },
    {
      route: "/tv-series",
      title: "TV Series",
      icon: <TVSeriesSVG className="nav-icon" />,
      get isCurrent() {
        return this.route === currentLocation ? "page" : "false";
      },
    },
    {
      route: "/bookmarks",
      title: "Bookmarks",
      icon: <BookmarkSVG className="nav-icon" />,
      get isCurrent() {
        return this.route === currentLocation ? "page" : "false";
      },
    },
  ] as const;

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location.pathname]);

  return (
    <div className="banner-wrapper">
      <header className="header bg-semi-dark">
        <Link to="/home" aria-label="Entertainment company">
          <Logo className="logo" />
        </Link>
        <nav>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.route}
                  title={item.title}
                  aria-current={item.isCurrent}
                >
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
            className="avatar"
            alt="your avatar"
          />
        </Link>
      </header>
    </div>
  );
};

export default Navbar;
