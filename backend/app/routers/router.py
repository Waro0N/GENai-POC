from fastapi import APIRouter
from ai_service import chat_api
from user import user_service
from auth import auth_service

api_router = APIRouter()
api_router.include_router(chat_api.router,prefix="/chat", tags=["chat"])
api_router.include_router(user_service.router, prefix="/users", tags=["users"])
api_router.include_router(auth_service.router, prefix="/auth", tags=["auth"])
# api_router.include_router(items.router, prefix="/items", tags=["items"])