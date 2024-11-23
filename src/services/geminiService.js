import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export default async function generateImageDescriptionWithGemini(imageBuffer) {
  const prompt =
    'Este prompt será usado para descrever uma imagem em português do Brasil. O texto não deve parecer ser gerado por uma IA, logo, gere de forma direta a descrição para a imagem enviada.';

  try {
    const image = {
      inlineData: {
        data: imageBuffer.toString('base64'),
        mimeType: 'image/jpg',
      },
    };
    const res = await model.generateContent([prompt, image]);
    return res.response.text() || 'Alt-text não disponível.';
  } catch (error) {
    console.error('Erro ao obter alt-text:', error.message, error);
    return 'Alt-text não disponível.';
  }
}
