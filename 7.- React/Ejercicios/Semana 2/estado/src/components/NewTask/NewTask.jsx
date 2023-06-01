function NewTask({item, handleSubmit, handleChange}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new task..."
          maxLength={100}
          onChange={handleChange}
          value={item}
        />{" "}
        {""}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default NewTask;
