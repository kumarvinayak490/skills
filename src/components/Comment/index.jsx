import { useContext, useState } from "react";
import { CommentContext } from "../../context/commentContext";

const InputCommentBox = () => {
  const { setComments } = useContext(CommentContext);
  const [comment, setComment] = useState("");
  return (
    <div className=" flex gap-4 items-center justify-center w-full mb-4">
      <div className="border p-2 w-1/12 ">Avatar</div>
      <div className="flex-1 ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setComments((prev) => {
              const newState = [...prev];
              const newComment = {
                id: Math.random() * 10,
                name: "Vinayak Kumar",
                time: "Just Now",
                comment,
                replies: [],
              };
              newState.push(newComment);
              setComment("");
              return newState;
            });
          }}
        >
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type="text"
            placeholder="Join the dicussion..."
            className="w-full p-2 border-2 rounded-md "
          />
        </form>
      </div>
    </div>
  );
};

export default InputCommentBox;
