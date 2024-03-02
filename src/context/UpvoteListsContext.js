import { createContext, useEffect, useState } from "react";

export const UpvoteListsContext = createContext();

export const UpvoteListsProvider = ({ children }) => {
  //state to track all upvote lists
  const [upvoteLists, setUpvoteLists] = useState(() => {
    const savedData = localStorage.getItem("upvoteLists");
    return savedData ? JSON.parse(savedData) : {};
  });

  // function to add three lists
  const addNewList = () => {
    setUpvoteLists((prevLists) => {
      const timeNow = Date.now();
      return {
        ...prevLists,
        [`list-${timeNow}`]: [],
        [`list-${timeNow + 1}`]: [],
        [`list-${timeNow + 2}`]: [],
      };
    });
  };

  useEffect(() => {
    localStorage.setItem("upvoteLists", JSON.stringify(upvoteLists));
  }, [upvoteLists]);
  // provide the state and the updater function to the context
  return (
    <UpvoteListsContext.Provider
      value={{ upvoteLists, setUpvoteLists, addNewList }}
    >
      {children}
    </UpvoteListsContext.Provider>
  );
};
