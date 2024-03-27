import openai from "openai";

const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
const openaiClient = new openai({ apiKey, dangerouslyAllowBrowser: true });

export const returnApi = async () => {
  try {
    const response = await openaiClient.completions.create({
      model: "gpt-3.5-turbo", // Escolha o modelo de linguagem adequado
      messages: [{ role: "user", content: "Say this is a test" }],
      stream: true,
    });

    return response;
  } catch (e) {
    throw e;
  }
};
