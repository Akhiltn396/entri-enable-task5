const Blog = require("../models/Blog");

const createBlog = (req, res) => {
  try {
    const sampleBlogPost = new Blog({
      title: "MongoDB",
      content: "This blog post covers the basics of MongoDB.",
      author: "657c93a3d5ecc600e10d2a2b",
    });

    sampleBlogPost.save();
    res.json(sampleBlogPost).status(200);
  } catch (error) {
    res.json("Something wrong happened").status(500);
  }
};

module.exports = { createBlog };
