import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// routes import
import postRoutes from "./routes/posts.js";

const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true })); // 이미지 전송이 있기 때문에 limit 설정
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// mongoDB connection
const CONNECTION_URL = process.env.MONGO_URI;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection success"))
  .catch((err) => console.error(err.message));
mongoose.set("useFindAndModify", false);

// routes
app.get("/", (req, res, next) => {
  res.send("Hello Photagram API");
});
app.use("/posts", postRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
