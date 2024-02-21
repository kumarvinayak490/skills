import { useContext } from "react";
import { CommentContext } from "../../../context/commentContext";

/* eslint-disable react/prop-types */
const CommentCard = ({ replies, time, comment, id, img }) => {
  console.log(id);
  const { setComments } = useContext(CommentContext);
  return (
    <div className="flex  w-full gap-4   ">
      <div className="w-1/12 h-14 border ">
        {/* img link to be provided here */}
        <img src="/public/vite.svg" className="w-full h-full object-cover" />
      </div>
      <div className=" flex-1 flex flex-col gap-y-14 ">
        <div className="relative">
          <h1 className="flex items-center gap-x-8 text-base font-bold text-cyan-700">
            <span>Vinayak Kumar</span>
            <span className="text-gray-300 font-semibold text-sm">{time}</span>
          </h1>
          <div>
            <p className="text-gray-800">{comment}</p>
          </div>
          <span className="absolute bottom-0 left-0 translate-y-full">
            <button
              onClick={() => {
                setComments((prev) => {
                  const newState = [...prev];
                  const comment = newState.filter((com) => {
                    console.log(com.id, "id is ", id);
                    return com.id == id;
                  });
                  comment.replies.push({
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
                  });
                  console.log(comment, "replies");
                  return [comment, ...newState];
                });
              }}
              className="text-gray-400"
            >
              reply
            </button>
          </span>
        </div>
        <div className=" flex flex-col gap-y-2 ">{replies}</div>
      </div>
    </div>
  );
};

export default CommentCard;
