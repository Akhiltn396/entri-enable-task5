const Comment = require("../models/Comments");

const createComment = (req, res) => {
  try {
    const sampleComment = new Comment({
      user: "657c93a3d5ecc600e10d2a2b",
      commentText: "Good post! Thanks for sharing.",
      blogPost: "657c96e962e1c97a3a1c37f5",
    });

    sampleComment.save();

    res.json(sampleComment).status(200);
  } catch (error) {
    res.json("Some error").status(500);
  }
};

module.exports = { createComment };
