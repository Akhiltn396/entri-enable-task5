const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  commentText: { type: String, required: true },
  postedAt: { type: Date, default: Date.now },
  blogPost: { type: mongoose.Schema.Types.ObjectId, ref: "BlogPost" },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
