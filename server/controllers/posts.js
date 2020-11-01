import PostMessage from "../models/postMessage.js";

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
