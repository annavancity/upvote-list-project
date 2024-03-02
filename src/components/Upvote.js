import React from "react";

const Upvote = ({ isSelected, onClick }) => {
  const className = isSelected ? "upvote-selected" : "upvote-default";

  return (
    <div
      className={`${className} mr-10 arrow-container`}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <p className="arrow">&#8593;</p>
    </div>
  );
};

export default Upvote;
