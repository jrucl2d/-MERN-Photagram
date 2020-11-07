import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

export const getPosts = async (req, res, next) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
export const createPosts = async (req, res, next) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost); // 성공적으로 생성
  } catch (err) {
    res.status(409).json({ message: err.message }); // conflict 발생
  }
};
export const updatePost = async (req, res, next) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

  await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true }); // new:true로 하면 실제 update된 post를 리턴 받음

  res.json(updatedPost);
};
export const deletePost = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  console.log("DELETE" + id);
  await PostMessage.findByIdAndRemove(id);
  res.json({ message: "게시글이 정상적으로 삭제되었습니다" });
};
