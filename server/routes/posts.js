import express from "express";
const router = express.Router();

// controllers
import { getPosts, createPosts, updatePost } from "../controllers/posts.js";

router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatePost);

export default router;
