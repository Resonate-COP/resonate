import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRouter from "./routes/users.route.js";
import postRouter from "./routes/posts.route.js";
import commentRouter from "./routes/comments.route.js";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/comments", commentRouter);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});