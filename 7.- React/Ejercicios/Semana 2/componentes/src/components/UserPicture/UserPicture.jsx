import "./style.css";

function UserPicture({ user }) {
  return (
    <>
      <img
        src={user.picture.large}
        alt={`Foto de ${user.name.first} ${user.name.last}`}
      />
    </>
  );
}
/*className="rounded-t-lg"*/
export default UserPicture;
