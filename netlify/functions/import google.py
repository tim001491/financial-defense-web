import google.generativeai as genai

# 請將下方的 "貼上您的API_KEY" 換成您剛剛網頁上複製的那串亂碼
genai.configure(api_key="AIzaSyAEZDn3nAtFDCna35QLa_KeLw_PnomX60U")

# 設定模型
model = genai.GenerativeModel('gemini-1.5-flash')

try:
    # 發送測試訊息
    response = model.generate_content("你好！請用一句話證明你現在可以正常運作。")
    print("✅ 測試成功！Gemini 回答：")
    print(response.text)
except Exception as e:
    print("❌ 發生錯誤，請檢查 Key 是否正確：")
    print(e)