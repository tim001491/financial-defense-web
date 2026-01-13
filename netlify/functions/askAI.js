import { GoogleGenerativeAI } from "@google/generative-ai";

export const handler = async (event, context) => {
  if (event.httpMethod !== "POST" ) {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { gender, age, job, budget, other } = JSON.parse(event.body);

    if (!process.env.GEMINI_API_KEY) {
      console.error("Error:GEMINI_API_KEY is missing.");
      throw new Error("Missing API Key");
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    // 保持使用 gemini-1.5-flash，這是目前最穩定的版本
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
      你是一位專業、有同理心且講話直白的台灣保險顧問。
      客戶資料：性別 ${gender}、年齡 ${age} 歲、職業 ${job}、年預算 ${budget} 元、其他需求：${other || '無'}。

      請提供保險規劃建議，並嚴格遵守以下 JSON 格式回傳，不要有任何額外文字：
      {
        "title": "標題",
        "analysis": "風險分析(80字)",
        "plan": "規劃建議(120字)"
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    
    // 強化 JSON 清理邏輯，防止 AI 回傳包含 Markdown 標籤
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    const cleanText = jsonMatch ? jsonMatch[0] : text;

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: cleanText,
    };

  } catch (error) {
    console.error("AI Error Details:", error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "連線忙碌中 (或本地測試模式)",
        analysis: "目前無法連接到 AI 大腦。請確認您是否已將網站部署到 Netlify，並設定好 GEMINI_API_KEY。",
        plan: "如果您已設定金鑰，請檢查 Netlify Functions 日誌確認 SDK 版本是否正確。"
      }),
    };
  }
};
