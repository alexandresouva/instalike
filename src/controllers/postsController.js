import { getAllPostsFromDB, createPostInDB } from '../models/postsModel.js';

export async function getAllPosts(_req, res) {
  try {
    const posts = await getAllPostsFromDB();
    res.status(200).json(posts);
  } catch (error) {
    console.error('Erro ao obter posts ->', error.message);
    res.status(500).json({ error: 'Erro ao obter posts' });
  }
}

export async function createPost(req, res) {
  const newPost = req.body;
  try {
    const createdPost = await createPostInDB(newPost);
    res.status(201).json(createdPost);
  } catch (error) {
    console.error('Erro ao criar post ->', error.message);
    res.status(500).json({ error: 'Erro ao criar post' });
  }
}
