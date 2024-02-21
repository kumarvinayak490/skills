import CommentCard from "./CommentCard";
import { CommentContext } from "../../context/commentContext";
import { useContext } from "react";

const CommentsContianer = () => {
  const { comments } = useContext(CommentContext);

  return (
    <div>
      {comments.map((comment, i) => {
        return (
          <CommentCard
            key={i}
            comment={comment.comment}
            id={comment.id}
            time={comment.time}
            img={comment.img}
            replies={comment.replies.map((comment, i) => (
              <CommentCard
                key={i}
                comment={comment.comment}
                id={comment.id}
                img={comment.img}
                replies={comment.replies}
                time={comment.time}
              />
            ))}
          />
        );
      })}
    </div>
  );
};

export default CommentsContianer;
