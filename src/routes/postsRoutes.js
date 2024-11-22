// Responsabilidade: ouvir a requisição e direcionar para o caminho correspondente (controller)
import multer from 'multer';
import {
  createPost,
  getAllPosts,
  imageUpload,
} from '../controllers/postsController.js';

const upload = multer({ dest: './uploads' });

const routes = (app) => {
  app.get('/posts', getAllPosts);
  app.post('/posts', createPost);
  app.post('/posts/images', upload.single('image'), imageUpload);
};

export default routes;
