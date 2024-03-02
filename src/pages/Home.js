import { useContext, useEffect } from "react";
import UpvoteList from "../components/UpvoteList";
import { UpvoteListsContext } from "../context/UpvoteListsContext";

const Home = () => {
  const { upvoteLists, addNewList } = useContext(UpvoteListsContext);

  useEffect(() => {
    if (Object.keys(upvoteLists).length === 0) {
      addNewList(upvoteLists);
    }
  }, [upvoteLists, addNewList]);

  return (
    <div>
      {Object.keys(upvoteLists).map((listId) => (
        <UpvoteList key={listId} listId={listId} />
      ))}
    </div>
  );
};

export default Home;
