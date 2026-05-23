from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

TOKEN = "8822680367:AAGXCUfXRQR7Kag1jbgs4LlELac0hJqVheU"
CHAT_ID = "8283401187"

@app.route('/send-message', methods=['POST'])
def send_message():
    data = request.json
    
    # JS dan kelayotgan kalitlar bilan bir xil bo'lishi shart
    full_name = data.get('fullName', '')
    telegram_user = data.get('telegramUser', '')
    message = data.get('message', '')
    
    text = (
        f"🔔 <b>Yangi xabar!</b>\n\n"
        f"👤 <b>Ism:</b> {full_name}\n"
        f"✈️ <b>Telegram:</b> {telegram_user}\n"
        f"📝 <b>Xabar:</b> {message}"
    )
    
    url = f"https://api.telegram.org/bot{TOKEN}/sendMessage"
    payload = {
        "chat_id": CHAT_ID,
        "text": text,
        "parse_mode": "HTML"
    }
    
    response = requests.post(url, json=payload)
    
    if response.status_code == 200:
        return jsonify({"success": True}), 200
    else:
        return jsonify({"success": False, "error": response.text}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5000)