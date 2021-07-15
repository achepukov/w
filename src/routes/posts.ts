import express from 'express';
import { Post } from '../db/models/Post';
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('posts!')
});

router.post('/', (req, res, next) => {
  const post = Post.create(req.body)
    .then(createdPost => {
      res.status(201);
      res.send(createdPost);
    })
    .catch(err => {
      res.status(400);
      res.send(err);
    })
});

export default router;