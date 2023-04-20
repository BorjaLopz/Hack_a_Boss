const users = [];

const insertUser = (newUser) => {
  const { user, email, age } = newUser;
  users.push({
    userName: user,
    userEmail: email,
    userAge: age,
  });
};


const getUser = () => users;

