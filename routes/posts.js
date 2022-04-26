const { Router } = require("express");
const express = require("express");
const Post = require("../models/PostModel");

const router = express.Router();

// Get All User data from dataBase
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//post user api to dataBase
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const SavedPost = await post.save();
    res.json(SavedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//get a Secific user data
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update Post
router.patch("/:postId", async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title, description: req.body.description } }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete Post
router.delete("/:postId", async (req, res) => {
  try {
    const deletePost = await Post.deleteOne({ _id: req.params.postId });
    res.json(deletePost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
