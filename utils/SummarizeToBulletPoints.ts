import { OpenAI } from "openai";

export async function summarizeToBulletPoints(text: string) {
  const configuration = {
    organization_id: process.env.ORGANISATION_ID,
    apiKey: process.env.OPEN_AI_API_KEY,
    dangerouslyAllowBrowser: true,
  };
  const client = new OpenAI(configuration);
  if (text === "") return;
  try {
    const completion = await client.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `can you convert the following message to bullet points: ${text}.`,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    return completion.choices[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
}
