// Responsabilidade: Camada que faz a conexão com o banco de dados
import dbConnect from '../config/dbConfig.js';

const connection = await dbConnect(process.env.STRING_CONNECTION);

export async function getAllPostsFromDB() {
  const posts = connection
    .db('instalike-db')
    .collection('posts')
    .find()
    .toArray();
  return posts;
}

export async function createPostInDB(post) {
  const newPost = await connection
    .db('instalike-db')
    .collection('posts')
    .insertOne(post);
  return newPost;
}
