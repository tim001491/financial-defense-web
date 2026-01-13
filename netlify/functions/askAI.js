const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async (event, context) => {
  // 只允許網站用 POST 方式傳送資料
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { gender, age, job, budget, other } = JSON.parse(event.body);

    // 檢查有沒有設定密碼 (等等會在 Netlify 設定)
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("Missing API Key");
    }

    // 連結 Google AI
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      你是一位專業、講話直白且有同理心的台灣保險顧問。
      客戶資料：
      - 性別：${gender === 'male' ? '男' : '女'}
      - 年齡：${age} 歲
      - 職業：${job}
      - 年預算：${budget} 元
      - 其他需求：${other || '無'}

      請根據資料提供保險規劃建議。
      請務必回傳 **純 JSON 格式** 字串，不要包含 markdown (如 \`\`\`json)，結構如下：
      {
        "title": "簡短標題 (例如：為 30 歲內勤的精準規劃)",
        "analysis": "現況與風險分析 (約 80 字，分析該職業與年齡的主要風險)",
        "plan": "具體規劃建議 (約 120 字，針對預算提出具體險種搭配，如實支實付、意外險等，並說明原因)"
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    // 清理多餘符號
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
        title: "連線忙線中", 
        analysis: "AI 目前回應較慢，或是金鑰尚未設定。", 
        plan: "建議您直接聯絡真人顧問為您服務。" 
      }),
    };
  }
};