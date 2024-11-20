// Responsabilidade: gerir a conexão com o banco de dados
import { MongoClient } from 'mongodb';

export default async function dbConnect(stringConnection) {
  try {
    const mongoClient = await MongoClient.connect(stringConnection);
    console.log('Conectado ao banco de dados.');
    return mongoClient;
  } catch (error) {
    console.log('Erro ao conectar ao banco de dados', error);
    process.exit();
  }
}
