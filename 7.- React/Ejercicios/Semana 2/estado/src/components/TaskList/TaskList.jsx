function TaskList({ data, render }) {
  return (
    <>
      <ul>{data.map(render)}</ul>
    </>
  );
}

export default TaskList;
