from fastapi import APIRouter, Request
from groq import Groq
from ai_service.approaches.chatreadretrive.chatreadretrive import ChatReadRetrive 
from ai_service.approaches.chatreadretrive.prompts import ai_prompts

router = APIRouter()


CHAT_MODEL = "llama3-8b-8192"

client = Groq(
    api_key="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"
)

chat_approaches = ChatReadRetrive(ai_model_name=CHAT_MODEL, client=client)

@router.post("/")
async def chat_retrive(requests: Request):
    data = await requests.json()
    question = data.get('question')
    prompt = ai_prompts.get('default Prompt')
    r = chat_approaches.run(prompt,question)
    return(r)
        