import express from 'express';
import { Post } from '../db/models/Post';
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('posts!')
});

router.post('/', async (req, res, next) => {
  const post = await Post.upsert(req.body)
  res.send(post);
});

export default router;