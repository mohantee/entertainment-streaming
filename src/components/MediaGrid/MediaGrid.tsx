import React from "react";
import "./MediaGrid.css";

interface MediaGridProps {
  children: React.ReactElement | React.ReactElement[];
  slider?: boolean;
}

function hasManyChildren(
  type: React.ReactElement | React.ReactElement[],
): type is React.ReactElement[] {
  return (type as React.ReactElement[]).length !== undefined;
}

const MediaGrid = ({ children, slider = false }: MediaGridProps) => {
  return (
    <div className="media-grid" data-slider={slider}>
      <ul>
        {hasManyChildren(children) ? (
          children.map((child, i) => <li key={`list-item-${i}`}>{child}</li>)
        ) : (
          <li>{children}</li>
        )}
      </ul>
    </div>
  );
};

export default MediaGrid;
