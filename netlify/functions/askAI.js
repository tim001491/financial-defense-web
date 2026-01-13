import { GoogleGenerativeAI } from "@google/generative-ai";

export const handler = async (event, context) => {
  // 1. 安全性檢查
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    // 2. 接收資料
    const { gender, age, job, budget, other } = JSON.parse(event.body);

    // 3. 檢查鑰匙
    if (!process.env.GEMINI_API_KEY) {
      console.error("Error: GEMINI_API_KEY is missing in environment variables.");
      throw new Error("Missing API Key");
    }

    // 4. 呼叫 Google AI
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
      你是一位專業、有同理心且講話直白的台灣保險顧問。
      客戶資料如下：
      - 性別：${gender === 'male' ? '男' : '女'}
      - 年齡：${age} 歲
      - 職業：${job}
      - 年預算：${budget} 元
      - 其他需求：${other || '無'}

      請根據上述資料，提供一份保險規劃建議。
      請務必回傳 **純 JSON 格式** 字串，不要包含 markdown 標記（如 \`\`\`json ），結構如下：
      {
        "title": "簡短標題 (例如：為 30 歲內勤人員的精準規劃)",
        "analysis": "現況與風險分析 (約 80 字，分析該職業與年齡的主要風險)",
        "plan": "具體規劃建議 (約 120 字，針對預算提出具體險種搭配，如實支實付、意外險等，並說明原因)"
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();

    return {
      statusCode: 200,
      body: cleanText,
    };

  } catch (error) {
    console.error("AI Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        title: "系統忙線中",
        analysis: "AI 目前連線不穩，或是後台金鑰尚未生效。",
        plan: "建議您重新整理網頁再試一次，或直接聯絡真人顧問。"
      }),
    };
  }
};