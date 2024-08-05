from fastapi import APIRouter, Request
from groq import Groq
from extention_ai_service.extention_approaches.get_chat import GetChat
from extention_ai_service.extention_approaches.prompts import extention_prompt

router = APIRouter()

CHAT_MODEL = "llama3-8b-8192"

client = Groq(
    api_key="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"
)

getChat = GetChat(chat_model=CHAT_MODEL,ai_services=client)

@router.post("/")
async def extention_chat(requests: Request):
    data = await requests.json()
    question=data.get('question')
    location=data.get('location')

    prompt=extention_prompt.get('default_prompt_extention')
    r= await getChat.run(question, prompt,location)
    return (r)