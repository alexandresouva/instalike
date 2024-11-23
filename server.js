// Responsabilidade: instanciar e controlar a configuração do servidor
import express from 'express';
import routes from './src/routes/postsRoutes.js';
import cors from 'cors';

const app = express();
const corsOptions = {
  origin: 'http://localhost:8000',
  optionsSuccessStatus: 200,
};
const port = 3000;

app.use(express.json());
app.use(express.static('uploads'));
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

routes(app);
