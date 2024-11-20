import express from 'express';

const posts = [
  {
    id: 1,
    description: 'This is my first post',
    image: 'https://picsum.photos/300/150',
  },
  {
    id: 2,
    description: 'This is my second post',
    image: 'https://picsum.photos/300/150',
  },
  {
    id: 3,
    description: 'This is my third post',
    image: 'https://picsum.photos/300/150',
  },
  {
    id: 4,
    description: 'This is my fourth post',
    image: 'https://picsum.photos/300/150',
  },
  {
    id: 5,
    description: 'This is my fifth post',
    image: 'https://picsum.photos/300/150',
  },
];

const app = express();
const port = 3000;
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

app.get('/posts', (_req, res) => {
  res.status(200).json(posts);
});

app.get('/posts/:id', (req, res) => {
  const post = posts.find((post) => post.id === Number(req.params.id));

  if (post) {
    return res.status(200).json(post);
  } else {
    return res.status(404).json({ error: 'Post not found' });
  }
});
