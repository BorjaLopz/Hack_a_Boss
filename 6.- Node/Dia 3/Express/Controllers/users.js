const users = [];

const getAllUsers = (req, res) => {
  try {
    res.status(200).send(users);
  } catch (e) {
    console.log(e);
    res.status(400).send({ error: e.message });
  }
};

const addUsers = (req, res) => {
  const newUser = {
    userName: req.body.user,
    userEmail: req.body.email,
    userAge: req.body.age,
  };

  users.push(newUser);
  res.status(200).send(newUser);
};

const updateUser = (req, res) => {
  users.forEach((user) => {
    if (user.userName === req.params.name) {
      user.userName = req.body.user;
      user.userEmail = req.body.email;
      user.userAge = req.body.age;
    }
  });
};

const deleteUser = (req, res) => {
  const elementIndex = users.findIndex(
    (user) => user.userName === req.params.name
  );
  users.splice(elementIndex, 1);
  res.status(200).send(users);
};

module.exports = { getAllUsers, addUsers, updateUser, deleteUser };
