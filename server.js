// Responsabilidade: instanciar e controlar a configuração do servidor
import express from 'express';
import routes from './src/routes/postsRoutes.js';

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static('uploads'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

routes(app);
