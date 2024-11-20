// Responsabilidade: instanciar e controlar a configuração do servidor
import express from 'express';
import routes from './src/routes/postsRoutes.js';

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
app.use(express.json());

routes(app);
