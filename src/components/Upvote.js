import arrowUp from "../images/arrow-up.svg";

const Upvote = ({ isSelected, onClick }) => {
  const className = isSelected ? "upvote-selected" : "upvote-default";

  return (
    <div className={`${className} mr-10`} onClick={onClick}>
      <img src={arrowUp} alt="arrow-up" />
    </div>
  );
};

export default Upvote;
