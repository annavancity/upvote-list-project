import { useContext, useEffect } from "react";
import ButtonAdd from "./ButtonAdd";
import Upvote from "./Upvote";
import { UpvoteListsContext } from "../context/UpvoteListsContext";

const UpvoteList = ({ listId }) => {
  const { upvoteLists, setUpvoteLists } = useContext(UpvoteListsContext);

  //initialize an upvote list if it doesn't exist
  let upvotes = upvoteLists[listId] || [];
  let selected = upvotes.length > 0 ? upvotes[0].selected : false; // all upvotes in the list share same state

  // initialize the list if it doesn't exist in the context
  useEffect(() => {
    if (!upvoteLists[listId]) {
      setUpvoteLists({
        ...upvoteLists,
        [listId]: [],
      });
    }
  }, [listId, upvoteLists, setUpvoteLists]);

  //function to add a new upvote to list
  const handleAddUpvote = () => {
    const newUpvote = { id: Date.now(), selected };
    const newUpvoteLists = [...(upvoteLists[listId] || []), newUpvote]; // upvoteLists is an object - accessing the list by key
    // state update by spreading existing state and updating the list by key
    setUpvoteLists({
      ...upvoteLists,
      [listId]: newUpvoteLists,
    });
  };

  // function to toglle upvote state
  const toggleUpvoteState = () => {
    const newSelectedState = !selected;
    // updating selected state of the upvotes for the current list
    const updatedList = upvoteLists[listId].map((upvote) => ({
      ...upvote,
      selected: newSelectedState,
    }));
    // setting updated list to the current listId
    setUpvoteLists({
      ...upvoteLists,
      [listId]: updatedList,
    });
  };

  return (
    <div className="list-row">
      <div className="upvotes-container">
        {upvotes.map((upvote) => (
          <Upvote
            key={upvote.id}
            isSelected={selected}
            onClick={toggleUpvoteState}
          />
        ))}
      </div>
      <div className="btn-container">
        <ButtonAdd onClick={handleAddUpvote} />
      </div>
    </div>
  );
};

export default UpvoteList;
