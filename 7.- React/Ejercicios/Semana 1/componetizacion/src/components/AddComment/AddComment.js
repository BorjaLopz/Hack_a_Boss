//No es obligatorio que tenga extension jsx pero si es recomendable

import { useState } from "react";
import CommentList from "../CommentList/CommentList";

function AddComment() {
  const [comment, setComment] = useState("");
  const [currentComment, setCurrentComment] = useState([]); 

  const handleChange = (e) => {
    // console.log(e)
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!comment) return

    const comments = [...currentComment, comment];
    console.log()
    setCurrentComment(comments);
    setComment("");
  };
  
  return (
    <>
      {currentComment && <CommentList comment={currentComment} />}      
      <div>
        <form onSubmit={handleSubmit}>
        <button>emojis</button> {""}
          <input
            type="text"
            id="comment"
            value={comment}
            onChange={handleChange}
            placeholder="Add a comment..."
          />{" "}
          <button type="submit">Post</button>
        </form>
      </div>
    </>
  );
}

export default AddComment;