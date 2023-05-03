const jwt = require("jsonwebtoken");
const crypt = require("bcrypt");

const registerController = async (req, res) => {
  // const { email, password, name, age } = req.body;
  try {
    const createUserResult = await req.userRepository.createUser(req.body);
    res.send(createUserResult);
  } catch (e) {
    // res.status(500).send(e.message);
    console.log(e.message);
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [rows] = await req.userRepository.getUserByEmail(email);
    if (!user) {
      res.status(401).send(`User with email ${email} not found`);
    }
    const areHashesEqual = await crypt.compare(password, user.password);
    if (areHashesEqual) {
      const token = jwt.sign(
        { exp: Math.floor(Date.now() / 1000) + 60 * 60, data: user },
        process.env.JWT_SECRET
      );
      res.status(200).send(token);
    } else {
      res.status(401).send("Passwords does not match. Please try again.");
    }
    res.send(user);
  } catch (e) {
    // res.status(500).send(e.message);
    console.log(e.message);
  }
};

const getUserController = async (req, res) => {
  res.send(req.userData);
  // try {

  // } catch (e) {
  //   // res.status(500).send(e.message);
  //   console.log(e.message);
  // }
};

module.exports = { registerController, loginController, getUserController };
