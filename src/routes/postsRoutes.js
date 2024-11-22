// Responsabilidade: ouvir a requisição e direcionar para o caminho correspondente (controller)
import multer from 'multer';
import {
  createPost,
  getAllPosts,
  imageUpload,
  updatePost,
} from '../controllers/postsController.js';

const upload = multer({ dest: './uploads' });

const routes = (app) => {
  app.get('/posts', getAllPosts);
  app.post('/posts', createPost);
  app.post('/upload', upload.single('image'), imageUpload);
  app.put('/upload/:id', updatePost);
};

export default routes;
