import getAllPostsFromDB from '../models/postsModel.js';

export async function getAllPosts(_req, res) {
  const posts = await getAllPostsFromDB();
  res.status(200).json(posts);
}
