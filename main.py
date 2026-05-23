import asyncio
from telegram import Bot

# Replace with your Telegram Bot Token
BOT_TOKEN = "8822680367:AAGXCUfXRQR7Kag1jbgs4LlELac0hJqVheU"

# Replace with your Telegram Chat ID (you must start a chat with the bot to get this)
# Easiest way to find your chat ID: Send a message to your bot,
# then visit https://api.telegram.org/bot<YourBOTToken>/getUpdates
CHAT_ID = "8283401187"

async def send_contact_message(full_name: str, telegram_user: str, message_text: str):
    """
    Sends a formatted message to your telegram account.
    """
    bot = Bot(token=BOT_TOKEN)
    
    formatted_message = (
        f"📩 <b>New Portfolio Contact!</b>\n\n"
        f"👤 <b>Name:</b> {full_name}\n"
        f"✈️ <b>Telegram:</b> {telegram_user}\n\n"
        f"📝 <b>Message:</b>\n{message_text}"
    )
    
    try:
        await bot.send_message(
            chat_id=CHAT_ID,
            text=formatted_message,
            parse_mode="HTML"
        )
        print("Message sent successfully!")
        return True
    except Exception as e:
        print(f"Failed to send message: {e}")
        return False

# Example Usage:
if __name__ == "__main__":
    # Test the function
    asyncio.run(send_contact_message(
        full_name="John Doe",
        telegram_user="@johndoe_example",
        message_text="Hello Anasxon, I really like your portfolio!"
    ))
