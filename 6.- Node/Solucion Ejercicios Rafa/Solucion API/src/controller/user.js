const createUserController = async (req, res) => {
  try {
    const userRepository = req.repositoryFactory.build("users");
    const user = await userRepository.create(req.body);
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
};

const getUserController = async (req, res) => {
  try {
    const userRepository = req.repositoryFactory.build("users");
    const user = await userRepository.getUserById(req.params.id);
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
};

const updateUserController = async (req, res) => {
  try {
    const userRepository = req.repositoryFactory.build("users");
    const user = await userRepository.updateUserEmail(
      req.params.id,
      req.body.email
    );
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
};

const deleteUserController = async (req, res) => {
  try {
    const userRepository = req.repositoryFactory.build("users");
    const user = await userRepository.deleteUser(req.params.id);
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  createUserController,
  getUserController,
  updateUserController,
  deleteUserController,
};
