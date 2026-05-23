import asyncio
from telegram import Bot
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

BOT_TOKEN = "8822680367:AAGXCUfXRQR7Kag1jbgs4lLelac0hJqVheU"
CHAT_ID = "8283401187"

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactMessage(BaseModel):
    full_name: str
    telegram_user: str
    message_text: str

async def send_telegram_message(full_name: str, telegram_user: str, message_text: str):
    bot = Bot(token=BOT_TOKEN)
    formatted_message = (
        f"📩 <b>New Portfolio contact!</b>\n\n"
        f"👤 <b>Name:</b> {full_name}\n"
        f"✈️ <b>Telegram:</b> {telegram_user}\n"
        f"📑 <b>Message:</b>\n{message_text}"
    )
    await bot.send_message(chat_id=CHAT_ID, text=formatted_message, parse_mode="HTML")

@app.post("/send-message")
async def handle_contact_form(data: ContactMessage):
    try:
        await send_telegram_message(
            full_name=data.full_name,
            telegram_user=data.telegram_user,
            message_text=data.message_text
        )
        return {"status": "success", "message": "Xabar muvaffaqiyatli yuborildi!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))