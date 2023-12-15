const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const sampleUser = new User({
      username: "entri",
      email: "entri@example.com",
      password: "entri",
      name: "Entri",
      bio: "A passionate coder.",
      profilePicture: "entri.jpg",
    });

    const newUser = sampleUser.save();
    res.json(sampleUser).status(200);
  } catch (error) {
    res.json(error).status(500);
  }
};

module.exports = { createUser };
