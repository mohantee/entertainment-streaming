/// <reference types="../../svg" />

import "./BookmarkSwitch.css";
import BookmarkFull from "../../assets/icon-bookmark-empty.svg";
const BookmarkSwitch = () => {
  return (
    <BookmarkFull
      role="button"
      className="bookmark-switch"
      aria-pressed="false"
      aria-label="bookmark"
    />
  );
};

export default BookmarkSwitch;
