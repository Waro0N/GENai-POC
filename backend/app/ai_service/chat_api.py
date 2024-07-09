from fastapi import APIRouter, Depends, HTTPException
from groq import Groq
from ai_service.approaches.chatreadretrive.chatreadretrive import ChatReadRetrive 

router = APIRouter()


CHAT_MODEL = "llama3-8b-8192"

client = Groq(
    api_key="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"
)

chat_approaches = ChatReadRetrive(ai_model_name=CHAT_MODEL, client=client)

@router.get("/")
def chat_retrive():
    r = chat_approaches.run()
    print(r)
    return(r)