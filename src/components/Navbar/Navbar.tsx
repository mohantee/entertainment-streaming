import "./Navbar.css";
import Logo from "../../assets/logo.svg";
import ImageAvatar from "../../assets/image-avatar.png";
import { Link } from "react-router-dom";
import HomeSVG from "../../shared/SVGs/HomeSVG";
import MoviesSVG from "../../shared/SVGs/MoviesSVG";
import TVSeriesSVG from "../../shared/SVGs/TVSeriesSVG";
import BookmarksSVG from "../../shared/SVGs/BookmarksSVG";

const Navbar = () => {
  return (
    <nav className="navbar bg-semi-dark">
      <img src={Logo} height={25.5} width={32} className="logo" />
      <ul className="nav-links">
        <li>
          <Link to="/home">
            <HomeSVG />
          </Link>
        </li>
        <li>
          <Link to="/movies">
            <MoviesSVG />
          </Link>
        </li>
        <li>
          <Link to="/tv-series">
            <TVSeriesSVG />
          </Link>
        </li>
        <li>
          <Link to="/bookmarks">
            <BookmarksSVG />
          </Link>
        </li>
      </ul>
      <img src={ImageAvatar} width={40} height={40} className="avatar" />
    </nav>
  );
};

export default Navbar;
