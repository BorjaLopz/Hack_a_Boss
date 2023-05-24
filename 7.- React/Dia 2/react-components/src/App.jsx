import Profile from "./Components/Profile.jsx";
import ToDoClass from "./Components/ToDoClass.jsx";
import UsersList from "./Components/UsersList.jsx";
import Welcome from "./Components/Welcome.jsx";

const users = [
  {
    id: 1,
    name: "Juana",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    id: 2,
    name: "Prueba",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 3,
    name: "Pepa",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 4,
    name: "Pepe",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
];

function App() {
  return (
    <>
      <Welcome name="Pepe" />
      <ToDoClass />
      {/* <UsersList>
        {users.map((user) => (
          <Profile key={`{user.id} {user.name}`} name={user.name} image={user.image} />
          ))}
      </UsersList> */}
    </>
  );
}

export default App;
