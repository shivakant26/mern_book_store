const Blog = require("../model/blog.model");

const createBlog = async (req, res) => {
  const { blogTitle, description } = req.body;
  try {
    if (!blogTitle || !description) {
      res.status(400).json({
        message: "please fill all fields",
      });
    } else {
      const blog = await Blog.create({
        blogTitle: blogTitle,
        description: description,
        blogImage: `${req.file.destination}/${req.file.filename}`,
      });
      res.status(200).json({
        data: blog,
        message: "blog created succussfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const allBlog = async (req, res) => {
  try {
    const blog = await Blog.find();
    if (!blog) {
      res.status(400).json({
        message: "No blog found",
      });
    } else {
      res.status(200).json({
        data: blog,
        message: "blog fetch succussfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const singleBlog = async (req, res) => {
  try {
    const blog = await Blog.find({ _id: req.params._id });
    if (blog) {
      res.status(200).json({
        data: blog,
        message: "single Blog fetch successfully",
      });
    } else {
      res.status(400).json({
        message: "record not found !",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete({ _id: req.params._id });
    if (!blog) {
      res.status(400).json({
        data: blog,
        message: "No Blog Available",
      });
    } else {
      res.status(200).json({
        message: "delete Blog Successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { createBlog, allBlog, singleBlog, deleteBlog };
