const getAllUsersController = async (req, res) => {
  try {
    const usersRepository = req.repositoryFactory.build("users");
    const users = await usersRepository.getAllUsers();
    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
};

const getUserByIdController = async (req, res) => {
  try {
    console.log(req.params.id);
    const usersRepository = req.repositoryFactory.build("users");
    const users = await usersRepository.getUserById(req.params.id);
    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
};

const addUserController = async (req, res) => {
  try {
    const usersRepository = req.repositoryFactory.build("users"); // Creamos el repositorio que queremos
    const user = await usersRepository.createUser(req.body);
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
};

const deleteUserController = async (req, res) => {
  try {
    const usersRepository = req.repositoryFactory.build("users"); // Creamos el repositorio que queremos
    const user = await usersRepository.deleteUser(req.params.id);
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
};

const updateUserController = async (req, res) => {
  try {
    const userRepository = req.repositoryFactory.build("users");
    const user = await userRepository.updateUserPassword(
      req.params.id,
      req.body.password
    );
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  getAllUsersController,
  addUserController,
  getUserByIdController,
  deleteUserController,
  updateUserController,
};
