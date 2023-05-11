const OPEN_AI_API_KEY = process.env.OPEN_AI_API_KEY;

const OPEN_AI_BASE_URL = "https://api.openai.com/v1";
const AI_MODEL = process.env.OPEN_AI_MODEL ?? "gpt-3.5-turbo";

const maxTokens = 256;
const countGeneration = 1;
const temperature = 1;

export const getVisaRequirements = async (
  country: string,
  language: string = "english"
) => {
  const messages = [
    {
      role: "system",
      content: `You are a helper, you need to give detailed instructions about how to get my visa to a specific country.`,
    },
    {
      role: "system",
      content: `Your whole answer must be in Markdown format and in ${language} without greetings or unrelevant information.`,
    },
    {
      role: "user",
      content: `Give me detailed instructions about how to get my tourism visa to ${country} being a Brazilian citzen`,
    },
  ];

  const res = await fetch(`${OPEN_AI_BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${OPEN_AI_API_KEY}`,
    },
    body: JSON.stringify({
      model: AI_MODEL,
      messages,
      max_tokens: maxTokens,
      n: countGeneration,
      temperature: temperature,
    }),
  });

  if (!res.ok) {
    throw new Error(
      `Failed to get completions: ${res.status}, ${await res.text()}`
    );
  }

  const data = await res.json();

  return data;
};
