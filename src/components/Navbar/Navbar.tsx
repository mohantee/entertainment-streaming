import "./Navbar.css";
import Logo from "../../assets/logo.svg";
import IconNavHome from "../../assets/icon-nav-home.svg";
import IconNavMovies from "../../assets/icon-nav-movies.svg";
import IconNavTvSeries from "../../assets/icon-nav-tv-series.svg";
import IconNavBookmark from "../../assets/icon-nav-bookmark.svg";
import ImageAvatar from "../../assets/image-avatar.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-semi-dark">
      <img src={Logo} height={20} width={25} />
      <ul className="nav-links">
        <li>
          <Link to="/home">
            <img src={IconNavHome} height={16} />
          </Link>
        </li>
        <li>
          <Link to="/movies">
            <img src={IconNavMovies} height={16} />
          </Link>
        </li>
        <li>
          <Link to="/tv-series">
            <img src={IconNavTvSeries} height={16} />
          </Link>
        </li>
        <li>
          <Link to="/bookmarks">
            <img src={IconNavBookmark} height={16} />
          </Link>
        </li>
      </ul>
      <img src={ImageAvatar} width={24} height={24} />
    </nav>
  );
};

export default Navbar;
