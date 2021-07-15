import express from 'express';
import { Post } from '../db/models/Post';
const router = express.Router();

router.get('/', async (req, res, next) => {
  const posts = await Post.findAll();
  res.send(posts);
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const post = await Post.findOne({ where: { id }});
  if (post) {
    res.send(post);
  } else {
    next({
      statusCode: 404
    });
  }
});

router.post('/', async (req, res, next) => {
  try {
    const created = await Post.create(req.body);
    res.status(201);
    res.send(created);
  } catch(e) {
    next(e);
  }
});

router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const post = await Post.findOne({ where: { id }});
  if (post) {
    const updated = await post.update({
      ...req.body,
      id,
    });
    res.send(updated);
  } else {
    next({
      statusCode: 404
    });
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  const post = await Post.findOne({ where: { id } });
  if (post) {
    await post.destroy();
    res.send('');
    res.status(204);
  } else {
    next({ statusCode: 404 })
  }
});

export default router;