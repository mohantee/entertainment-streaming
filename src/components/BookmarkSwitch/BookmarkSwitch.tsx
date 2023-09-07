/// <reference types="../../svg" />

import "./BookmarkSwitch.css";
import BookmarkFull from "../../assets/icon-bookmark-empty.svg";
import useShowsStore from "../../store/shows";
import { Show } from "../../store/shows";

interface BookmarkSwitchProps {
  show: Show;
}

const BookmarkSwitch = (props: BookmarkSwitchProps) => {
  const toggleBookmark = useShowsStore((state) => state.toggleBookmark);
  return (
    <button
      type="button"
      aria-pressed={props.show.isBookmarked}
      aria-label="Bookmark"
      className="bookmark-switch"
      onClick={() => toggleBookmark(props.show)}
    >
      <BookmarkFull />
    </button>
  );
};

export default BookmarkSwitch;
