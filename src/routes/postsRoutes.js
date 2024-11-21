// Responsabilidade: ouvir a requisição e direcionar para o caminho correspondente (controller)
import { createPost, getAllPosts } from '../controllers/postsController.js';

const routes = (app) => {
  app.get('/posts', getAllPosts);
  app.post('/posts', createPost);
};

export default routes;
