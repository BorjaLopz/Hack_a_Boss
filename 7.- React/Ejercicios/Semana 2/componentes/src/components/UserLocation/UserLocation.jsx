import "./style.css";

function UserLocation({ user }) {
  return (
    <>
      <p>
        {user.location.country}, {user.location.state}, {user.location.city},{" "}
        {user.location.postcode}
      </p>
    </>
  );
}
/* className="mb-3 font-normal text-indigo-950" */

export default UserLocation;
