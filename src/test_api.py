from google import genai

# 1. 設定您的 API Key
client = genai.Client(api_key="您的API_KEY") 
# 請記得把 "您的API_KEY" 換回您原本那串亂碼

try:
    # 2. 發送測試訊息 (新版寫法)
    response = client.models.generate_content(
        model="gemini-1.5-flash",
        contents="你好！請告訴我今天是星期幾？"
    )
    
    print("✅ 測試成功！Gemini 回答：")
    print(response.text)

except Exception as e:
    print("❌ 發生錯誤：")
    print(e)