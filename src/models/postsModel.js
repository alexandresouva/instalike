// Responsabilidade: Camada que faz a conexão com o banco de dados
import 'dotenv/config';
import { ObjectId } from 'mongodb';
import dbConnect from '../config/dbConfig.js';

const connection = await dbConnect(process.env.STRING_CONNECTION);

export async function getAllPostsFromDB() {
  const posts = await connection
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

export async function updatePostInDB(id, post) {
  const objID = ObjectId.createFromHexString(id);
  const updatedPost = await connection
    .db('instalike-db')
    .collection('posts')
    .updateOne({ _id: new ObjectId(objID) }, { $set: post });
  return updatedPost;
}
