export const AddComment = () => {
  return (
    <>
      <form>
        <button>☺</button>
        <label htmlFor="comment" id="comment" value="comment">
          comentario
          <input type="text" name="comment" id="comment" />
        </label>
        <button>Post</button>
      </form>
    </>
  );

}