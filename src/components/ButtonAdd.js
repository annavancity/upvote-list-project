import plus from "../images/plus.svg";

const ButtonAdd = ({ onClick }) => {
  return (
    <div>
      <button className="btn-add" onClick={onClick}>
        {" "}
        <img src={plus} alt="plus" />
      </button>
    </div>
  );
};

export default ButtonAdd;
