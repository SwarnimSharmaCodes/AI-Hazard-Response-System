import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function test() {
    const models = [
        "gemini-3-flash",
        "gemini-3.1-flash-lite",
        "gemini-2.5-flash-lite",
        "gemini-2.0-flash"
    ];

    for (const modelName of models) {
        try {
            const model = genAI.getGenerativeModel({
                model: modelName,
            });

            const result = await model.generateContent("Say hello.");

            console.log("✅", modelName, "WORKS");
            console.log(result.response.text());
            break;
        } catch (err) {
            console.log("❌", modelName);
            console.log(err.message);
        }
    }
}

test();