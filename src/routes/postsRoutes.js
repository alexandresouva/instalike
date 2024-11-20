// Responsabilidade: ouvir a requisição e direcionar para o caminho correspondente (controller)
import { getAllPosts } from '../controllers/postsController.js';

const routes = (app) => {
  app.get('/posts', getAllPosts);
};

export default routes;
