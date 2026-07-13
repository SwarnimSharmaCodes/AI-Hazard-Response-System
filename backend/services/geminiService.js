import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const analyzeHazardImage = async (buffer, mimeType) => {

    const model = genAI.getGenerativeModel({
        model: "gemini-3.1-flash-lite",
    });

    const image = {
        inlineData: {
            data: buffer.toString("base64"),
            mimeType,
        },
    };

    const prompt = `
You are an Industrial Safety Inspector.

Analyze this image carefully.

Return ONLY valid JSON.

{
  "hazardType":"",
  "severity":"",
  "confidence":0,
  "recommendation":""
}

Hazard Types:
- Fire Hazard
- Electrical Hazard
- Chemical Spill
- Gas Leak
- Smoke
- Unknown

Severity:
- Low
- Medium
- High

Confidence:
50-100

Recommendation:
One short sentence.

Return JSON only.
`;

    const result = await model.generateContent({
    contents: [
        {
            role: "user",
            parts: [
                { text: prompt },
                image,
            ],
        },
    ],
    generationConfig: {
        responseMimeType: "application/json",
    },
});

    return result.response.text();
};