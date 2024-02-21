/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CommentContext = createContext({
  comments: [
    {
      id: 1,
      name: "",
      time: "",
      img: "",
      comment: "",
      replies: [
        {
          id: 1,
          name: "",
          time: "",
          img: "",
          comment: "",
          replies: [],
        },
      ],
    },
  ],
  setComments: () => null,
});

export const CommentsProvider = ({ children }) => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "",
      time: "",
      img: "",
      comment: "",
      replies: [
        {
          id: 1,
          name: "",
          time: "",
          img: "",
          comment: "",
          replies: [],
        },
      ],
    },
  ]);

  console.log(comments);
  return (
    <CommentContext.Provider value={{ comments, setComments }}>
      {children}
    </CommentContext.Provider>
  );
};
