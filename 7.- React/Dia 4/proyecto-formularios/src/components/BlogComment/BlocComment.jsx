import { useRef, useState } from "react";

function BlogComment() {
  const [comments, setComments] = useState([]);
  const textAreaRef = useRef(null);

  const saveComment = (e) => {
    e.preventDefault();
    // console.log(textAreaRef.current.value);
    const text = textAreaRef.current;

    if(!text) return;

    setComments([text.value, ...comments]);
    text.value = "";
  };

  const validate = e => {
    console.log(textAreaRef.current.value)
  }

  const commentList = comments.map((comment, index) => <p key={index + comment}>{index + 1} {".- "} {comment}</p>)

  return (
    <>
      <h1>Blog Comment</h1>
      <form onSubmit={saveComment}>
        <label htmlFor="comment">Introduce tu comentario</label> {""}
        <textarea ref={textAreaRef} onBlur={validate}></textarea> {""}
        <button type="submit">Enviar comentario</button>

        <div>
          {commentList}
        </div>
      </form>
    </>
  );
}

export default BlogComment;
