import express from "express";
const router = express.Router();

// controllers
import {
  getPosts,
  createPosts,
  updatePost,
  deletePost,
} from "../controllers/posts.js";

router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
