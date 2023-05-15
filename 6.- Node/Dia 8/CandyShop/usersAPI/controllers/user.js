const jwt = require("jsonwebtoken");
const crypt = require("bcrypt");

const registerController = async (req, res) => {
  try {
    const createUserResult = await req.userRepository.createUser(req.body);
    res.send(createUserResult);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const getUserController = (req, res) => {
  res.send(req.userData);
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await req.userRepository.getUserByEmail(email);
    if (!user) res.status(404).send(`User with email ${email} not found`);
    const areHashesEqual = await crypt.compare(password, user.password);
    if (areHashesEqual) {
      const token = jwt.sign(
        { exp: Math.floor(Date.now() / 1000) + 60 * 60, data: user },
        process.env.JWT_SECRET
      );
      res.status(200).send(token);
    } else {
      res.status(401).send("Passwords does not match please try again");
    }
  } catch (e) {
    console.log(e.message);
  }
};

const createUserProfileController = async (req, res) => {
  try {
    const image = req.file;
    const { bankAccount, userId } = req.body;
    const createdProfile = await req.userRepository.createProfile({
      image,
      bankAccount,
      userId,
    });

    res.send(createdProfile);
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  registerController,
  loginController,
  getUserController,
  createUserProfileController,
};
