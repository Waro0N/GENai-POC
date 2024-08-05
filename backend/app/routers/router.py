from fastapi import APIRouter
from ai_service import chat_api
from user import user_service
from auth import auth_service
from extention_ai_service import extention_chat

api_router = APIRouter()
api_router.include_router(chat_api.router,prefix="/chat", tags=["chat"])
api_router.include_router(user_service.router, prefix="/users", tags=["users"])
api_router.include_router(auth_service.router, prefix="/auth", tags=["auth"])
api_router.include_router(extention_chat.router, prefix="/extention-chat", tags=["extentionchat"])