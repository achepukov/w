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
  res.send(post);
});

router.post('/', (req, res, next) => {
  Post.create(req.body)
    .then(created => {
      res.status(201);
      res.send(created);
    })
    .catch(err => {
      res.status(400);
      res.send(err);
    })
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  Post.upsert({
      ...req.body,
      id,
    })
    .then(([updated]) => {
      res.status(200);
      res.send(updated);
    })
    .catch(err => {
      res.status(400);
      res.send(err);
    })
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  Post.destroy({
    where: { id }
  })
    .then(() => {
      res.send('');
      res.status(204);
    })
    .catch(err => {
      res.status(400);
      res.send(err);
    })
});

export default router;