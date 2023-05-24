function Comment(props) {
  const comments = props.data;
  // console.log(comment)

  const replyButtonHandler = ({index}) => {
    console.log(comment);
    console.log(index);
    const comment = comments[index];  //Obtenemos el comentario que queremos responder
  }

  return (
    <>
      <div>
        <ul>
          {comments.map((item, index) => (
            <li key={`${index} ${item}`}>
              <img src="" alt="profile picture" />
              <p>
                <b>username</b>
              </p>
              <div>
                <b>Comentario: </b>
                {item}
              </div>
              <div>
                <button>like</button>
                <p>number of likes</p>
              </div>
              <button onClick={(e) => replyButtonHandler({ index })}>
                reply
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Comment;
