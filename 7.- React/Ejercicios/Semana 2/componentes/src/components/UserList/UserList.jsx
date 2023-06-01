import "./style.css";

function UserList({ data, render }) {
  return (
    <>
      <ul>{data.map(render)}</ul>
    </>
  );
}

export default UserList;
