import "./style.css";

function UserName({ user }) {
  return (
    <>
      <h2>
        {user.name.first} {user.name.last}
      </h2>
    </>
  );
}
/* className="mb-2 text-2xl font-bold text-indigo-950 py-3"*/
export default UserName;
