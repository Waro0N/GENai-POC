from fastapi import APIRouter
from ai_service import chat_api

api_router = APIRouter()
api_router.include_router(chat_api.router,prefix="/chat", tags=["chat"])
# api_router.include_router(users.router, prefix="/users", tags=["users"])
# api_router.include_router(utils.router, prefix="/utils", tags=["utils"])
# api_router.include_router(items.router, prefix="/items", tags=["items"])