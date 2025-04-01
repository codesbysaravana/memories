import express from "express";

import { getPosts, createPost, updatePost, deletepost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
//patch is used for updating and deleting docs
router.patch("/:id", updatePost);
router.delete("/:id", deletepost);

export default router;