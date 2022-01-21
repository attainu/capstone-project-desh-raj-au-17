const bcrypt = require("bcrypt");
const User = require("../models/user");

exports.registerUser = async (req, res) => {
  try {
    //genrating new hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //craeting new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // save user and send response
    const user = await newUser.save();
    res.status(200).json({
      user,
    });
  } catch (err) {
    res.send(err.message);
  }
};

// LOGIN ROUTE
exports.userLogin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    !validPassword && res.status(400).json("you enterd a wrong password");

    res.status(200).json(user);
  } catch (error) {
    res.send(error.message);
  }
};
