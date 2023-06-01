import UserList from "../components/UserList/UserList";
import User from "../components/User/User";

function Cards({ users }) {
  return (
    <>
      <UserList
        data={users}
        render={(user) => {
          return (
            <li key={user.login.uuid}>
              <User user={user} />
            </li>
          );
        }}
      />
    </>
  );
}

// li
/* className="my-10 first:my-0" */
export default Cards;
