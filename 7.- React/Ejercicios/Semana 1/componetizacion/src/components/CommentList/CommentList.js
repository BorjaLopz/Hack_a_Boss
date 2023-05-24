import Comment from "../Comment/Comment";

function CommentList (props) {
  const comment = props.comment;
  // console.log("comment: " + comment);
  return (
    <>
    <ul>
    </ul>
      <Comment data={comment}/>
    </>
  )
}

export default CommentList;