import express from "express";
const router = express.Router();

// controllers
import {
  getPosts,
  createPosts,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatePost);
router.patch("/:id/likePost", likePost);
router.delete("/:id", deletePost);

export default router;
